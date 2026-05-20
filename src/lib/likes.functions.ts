import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { z } from "zod";

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

export const addLike = createServerFn({ method: "POST" })
  .inputValidator(z.object({
    userAgent: z.string().optional(),
    fingerprint: z.string().optional(),
  }))
  .handler(async ({ data }) => {
    const { error } = await supabase
      .from("likes")
      .insert({
        user_agent: data.userAgent,
        fingerprint: data.fingerprint,
      });

    if (error) {
      console.error("Error adding like:", error);
      throw new Error("Failed to add like");
    }
    return { success: true };
  });

export const getLikesList = createServerFn({ method: "POST" })
  .inputValidator(z.object({ password: z.string() }))
  .handler(async ({ data }) => {
    if (data.password !== process.env.ADMIN_PASSWORD) {
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
