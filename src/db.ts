import { SupabaseClient } from '@supabase/supabase-js';

export class PostgREST extends SupabaseClient {
  constructor(url: string, key: string) {
    super(key, key);
    this.restUrl = url;
  }
}
