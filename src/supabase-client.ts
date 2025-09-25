
const SUPABASE_URL = import.meta.env.SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY as string;

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);


//const supabaseUrl= import.meta.env.VITE_supabaseUrl;
//const supabaseKey= import.meta.env.VITE_supabaseKey;

//export const supabase = createClient(supabaseUrl, supabaseKey);