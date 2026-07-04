import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listExperience from "./tools/get-experience";

export default defineMcp({
  name: "alyona-kunilova-cv-mcp",
  title: "Alyona Kunilova CV",
  version: "0.1.0",
  instructions:
    "Tools for reading Alyona Kunilova's CV (marketing & communications leader). Use `get_profile` for the top-level positioning and `list_experience` for work history.",
  tools: [getProfile, listExperience],
});
