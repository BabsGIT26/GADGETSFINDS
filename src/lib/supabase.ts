import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qhtvzrljonawaelduspq.supabase.co";
const supabaseKey = "sb_publishable_ABBpoxLWueXenpfUlTvUvQ_lli4VA2E";

export const supabase = createClient(supabaseUrl, supabaseKey);
