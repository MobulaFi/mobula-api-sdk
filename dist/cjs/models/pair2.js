"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pair2Schema = void 0;
var schema_1 = require("../schema");
var token0_1 = require("./token0");
exports.pair2Schema = (0, schema_1.object)({
    address: ['address', (0, schema_1.optional)((0, schema_1.string)())],
    token0: ['token0', (0, schema_1.optional)((0, schema_1.lazy)(function () { return token0_1.token0Schema; }))],
    token1: ['token1', (0, schema_1.optional)((0, schema_1.lazy)(function () { return token0_1.token0Schema; }))],
    liquidity: ['liquidity', (0, schema_1.optional)((0, schema_1.number)())],
    volume: ['volume', (0, schema_1.optional)((0, schema_1.number)())],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    protocol: ['protocol', (0, schema_1.optional)((0, schema_1.string)())],
    blockchain: ['blockchain', (0, schema_1.optional)((0, schema_1.string)())],
    exchange: ['exchange', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    factory: ['factory', (0, schema_1.optional)((0, schema_1.string)())],
});
//# sourceMappingURL=pair2.js.map