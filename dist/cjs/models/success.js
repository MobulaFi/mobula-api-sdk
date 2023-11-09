"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.successSchema = void 0;
var schema_1 = require("../schema");
var tx_1 = require("./tx");
exports.successSchema = (0, schema_1.object)({
    amountOut: ['amountOut', (0, schema_1.optional)((0, schema_1.string)())],
    error: ['error', (0, schema_1.optional)((0, schema_1.string)())],
    isAggregator: ['isAggregator', (0, schema_1.optional)((0, schema_1.boolean)())],
    protocol: ['protocol', (0, schema_1.optional)((0, schema_1.string)())],
    tx: ['tx', (0, schema_1.optional)((0, schema_1.lazy)(function () { return tx_1.txSchema; }))],
    willFail: ['will_fail', (0, schema_1.optional)((0, schema_1.boolean)())],
});
//# sourceMappingURL=success.js.map