import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { z } from "zod";
import { timingSafeEqual, createHash } from "crypto";

export const getLikesCount = createServerFn({ method: "GET" })
  .handler(async () => {
    const { count, error } = await supabaseAdmin
      .from("likes")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error fetching likes count:", error);
      return 0;
    }
    return count || 0;
  });

export const hasLiked = createServerFn({ method: "POST" })
  .inputValidator(z.object({ fingerprint: z.string().min(8).max(128) }))
  .handler(async ({ data }) => {
    const { count, error } = await supabaseAdmin
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
    fingerprint: z.string().min(8).max(128),
    userAgent: z.string().max(512).optional(),
  }))
  .handler(async ({ data }) => {
    const { data: existing, error: selErr } = await supabaseAdmin
      .from("likes")
      .select("id")
      .eq("fingerprint", data.fingerprint)
      .limit(1);

    if (selErr) {
      console.error("Error checking like:", selErr);
      throw new Error("Failed to toggle like");
    }

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
