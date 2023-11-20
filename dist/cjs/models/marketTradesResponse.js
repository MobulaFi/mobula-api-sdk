"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.marketTradesResponseSchema = void 0;
var schema_1 = require("../schema");
var trade_1 = require("./trade");
exports.marketTradesResponseSchema = (0, schema_1.object)({
    trades: ['trades', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return trade_1.tradeSchema; })))]
});
//# sourceMappingURL=marketTradesResponse.js.map