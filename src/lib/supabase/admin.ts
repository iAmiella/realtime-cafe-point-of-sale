import { environment } from "@/configs/environment";
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  return createClient(
    environment.SUPABASE_URL,
    environment.SUPABASE_SECRET_KEY,
  );
}
