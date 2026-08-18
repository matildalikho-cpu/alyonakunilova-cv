import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listExperience from "./tools/get-experience";

// Resolved at build time from the project's public backend URL.
const supabaseUrl =
  (typeof process !== "undefined" ? process.env?.VITE_SUPABASE_URL : undefined) ??
  (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_SUPABASE_URL ??
  "https://supabase.invalid";

export default defineMcp({
  name: "alyona-kunilova-cv-mcp",
  title: "Alyona Kunilova CV",
  version: "0.1.0",
  instructions:
    "Tools for reading Alyona Kunilova's CV (marketing & communications leader). Use `get_profile` for the top-level positioning and `list_experience` for work history.",
  // Require a valid bearer token so the MCP endpoint is not anonymously callable.
  auth: auth.oauth.issuer({
    issuer: `${supabaseUrl}/auth/v1`,
    acceptedAudiences: "authenticated",
    jwksUri: `${supabaseUrl}/auth/v1/.well-known/jwks.json`,
    resourceName: "Alyona Kunilova CV MCP",
  }),
  tools: [getProfile, listExperience],
});
