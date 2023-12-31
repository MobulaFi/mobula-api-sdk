"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCryptoDataSchema = void 0;
var schema_1 = require("../schema");
exports.searchCryptoDataSchema = (0, schema_1.object)({
    blockchains: ['blockchains', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    contracts: ['contracts', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.nullable)((0, schema_1.string)())))],
    id: ['id', (0, schema_1.optional)((0, schema_1.number)())],
    liquidity: ['liquidity', (0, schema_1.optional)((0, schema_1.bigint)())],
    logo: ['logo', (0, schema_1.optional)((0, schema_1.string)())],
    marketCap: ['market_cap', (0, schema_1.optional)((0, schema_1.bigint)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.string)())],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    symbol: ['symbol', (0, schema_1.optional)((0, schema_1.string)())],
    twitter: ['twitter', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    volume: ['volume', (0, schema_1.optional)((0, schema_1.bigint)())],
    website: ['website', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
});
//# sourceMappingURL=searchCryptoData.js.map