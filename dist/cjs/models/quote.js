"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteSchema = void 0;
var schema_1 = require("../schema");
exports.quoteSchema = (0, schema_1.object)({
    marketCap: ['market_cap', (0, schema_1.optional)((0, schema_1.number)())],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    volume: ['volume', (0, schema_1.optional)((0, schema_1.number)())],
});
//# sourceMappingURL=quote.js.map