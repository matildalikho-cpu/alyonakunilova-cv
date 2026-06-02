import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { Database } from "@/integrations/supabase/types";
import { z } from "zod";
import { timingSafeEqual, createHash } from "crypto";

// Note: reads use supabaseAdmin because the `likes` table contains
// fingerprint/user_agent values we do not want to expose via a public
// SELECT RLS policy. Rate limiting + caching below mitigate abuse.

// Simple in-memory rate limiter (per worker isolate).
// Not distributed, but raises the cost of trivial flooding.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;
const rateBuckets = new Map<string, { count: number; reset: number }>();

function getClientIp(): string {
  try {
    const req = getRequest();
    const h = req.headers;
    return (
      h.get("cf-connecting-ip") ||
      h.get("x-real-ip") ||
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown"
    );
  } catch {
    return "unknown";
  }
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.reset < now) {
    rateBuckets.set(key, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return;
  }
  bucket.count += 1;
  if (bucket.count > RATE_LIMIT_MAX) {
    throw new Error("Rate limit exceeded. Please try again later.");
  }
  // Opportunistic cleanup
  if (rateBuckets.size > 5000) {
    for (const [k, v] of rateBuckets) {
      if (v.reset < now) rateBuckets.delete(k);
    }
  }
}

// Fingerprint must be a hex-like opaque token (no arbitrary chars).
const fingerprintSchema = z
  .string()
  .min(16)
  .max(128)
  .regex(/^[a-zA-Z0-9_-]+$/, "Invalid fingerprint format");

// Cache the public count briefly to absorb traffic spikes.
let countCache: { value: number; expires: number } | null = null;
const COUNT_TTL_MS = 5_000;

export const getLikesCount = createServerFn({ method: "GET" })
  .handler(async () => {
    const now = Date.now();
    if (countCache && countCache.expires > now) return countCache.value;

    const { count, error } = await getAnonClient()
      .from("likes")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error fetching likes count:", error);
      return countCache?.value ?? 0;
    }
    const value = count ?? 0;
    countCache = { value, expires: now + COUNT_TTL_MS };
    return value;
  });

export const hasLiked = createServerFn({ method: "POST" })
  .inputValidator(z.object({ fingerprint: fingerprintSchema }))
  .handler(async ({ data }) => {
    checkRateLimit(`hasLiked:${getClientIp()}`);

    const { count, error } = await getAnonClient()
      .from("likes")
      .select("*", { count: "exact", head: true })
      .eq("fingerprint", data.fingerprint);

    if (error) {
      console.error("Error checking like:", error);
      return false;
    }
    return (count ?? 0) > 0;
  });

export const toggleLike = createServerFn({ method: "POST" })
  .inputValidator(z.object({
    fingerprint: fingerprintSchema,
    userAgent: z.string().max(512).optional(),
  }))
  .handler(async ({ data }) => {
    const ip = getClientIp();
    checkRateLimit(`toggleLike:ip:${ip}`);
    checkRateLimit(`toggleLike:fp:${data.fingerprint}`);

    const { data: existing, error: selErr } = await supabaseAdmin
      .from("likes")
      .select("id")
      .eq("fingerprint", data.fingerprint)
      .limit(1);

    if (selErr) {
      console.error("Error checking like:", selErr);
      throw new Error("Failed to toggle like");
    }

    countCache = null;

    if (existing && existing.length > 0) {
      const { error } = await supabaseAdmin
        .from("likes")
        .delete()
        .eq("fingerprint", data.fingerprint);
      if (error) {
        console.error("Error removing like:", error);
        throw new Error("Failed to remove like");
      }
      return { liked: false };
    }

    const { error } = await supabaseAdmin
      .from("likes")
      .insert({
        user_agent: data.userAgent,
        fingerprint: data.fingerprint,
      });
    if (error) {
      console.error("Error adding like:", error);
      throw new Error("Failed to add like");
    }
    return { liked: true };
  });

export const getLikesList = createServerFn({ method: "POST" })
  .inputValidator(z.object({ password: z.string().min(16).max(256) }))
  .handler(async ({ data }) => {
    const adminPassword = process.env.ADMIN_PASSWORD ?? "";
    const ha = createHash("sha256").update(data.password).digest();
    const hb = createHash("sha256").update(adminPassword).digest();
    if (!timingSafeEqual(ha, hb)) {
      throw new Error("Unauthorized");
    }

    const { data: likes, error } = await supabaseAdmin
      .from("likes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching likes list:", error);
      throw new Error("Failed to fetch likes");
    }
    return likes;
  });
