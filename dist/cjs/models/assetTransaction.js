"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetTransactionSchema = void 0;
var schema_1 = require("../schema");
exports.assetTransactionSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.string)())],
    symbol: ['symbol', (0, schema_1.optional)((0, schema_1.string)())],
    id: ['id', (0, schema_1.optional)((0, schema_1.number)())],
    contract: ['contract', (0, schema_1.optional)((0, schema_1.string)())],
    logo: ['logo', (0, schema_1.optional)((0, schema_1.string)())],
});
//# sourceMappingURL=assetTransaction.js.map