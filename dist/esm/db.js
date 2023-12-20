import { SupabaseClient } from '@supabase/supabase-js';
export class PostgREST extends SupabaseClient {
    constructor(url, key) {
        super(key, key);
        this.restUrl = url;
    }
}
//# sourceMappingURL=db.js.map