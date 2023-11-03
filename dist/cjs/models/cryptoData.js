"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoDataSchema = void 0;
var schema_1 = require("../schema");
exports.cryptoDataSchema = (0, schema_1.object)({
    blockchains: ['blockchains', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.nullable)((0, schema_1.string)())))],
    id: ['id', (0, schema_1.optional)((0, schema_1.number)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.string)())],
    symbol: ['symbol', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
});
//# sourceMappingURL=cryptoData.js.map