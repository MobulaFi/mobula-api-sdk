"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgREST = void 0;
var tslib_1 = require("tslib");
var supabase_js_1 = require("@supabase/supabase-js");
var PostgREST = /** @class */ (function (_super) {
    tslib_1.__extends(PostgREST, _super);
    function PostgREST(url, key) {
        var _this = _super.call(this, key, key) || this;
        _this.restUrl = url;
        return _this;
    }
    return PostgREST;
}(supabase_js_1.SupabaseClient));
exports.PostgREST = PostgREST;
//# sourceMappingURL=db.js.map