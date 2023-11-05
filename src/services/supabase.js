import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://unzyyzireqjnmtnsmamb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuenl5emlyZXFqbm10bnNtYW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMDg1MjAsImV4cCI6MjAxNDY4NDUyMH0.StLEccgITGECoFm1wSWZOHEO4BNJi23iGJu0h2tvO6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
