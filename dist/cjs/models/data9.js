"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.data9Schema = void 0;
var schema_1 = require("../schema");
var lastUpdated2_1 = require("./lastUpdated2");
var transaction_1 = require("./transaction");
exports.data9Schema = (0, schema_1.object)({
    transactions: [
        'transactions',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return transaction_1.transactionSchema; }))),
    ],
    total: ['total', (0, schema_1.optional)((0, schema_1.number)())],
    offset: ['offset', (0, schema_1.optional)((0, schema_1.number)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    page: ['page', (0, schema_1.optional)((0, schema_1.number)())],
    lastUpdated: ['lastUpdated', (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return lastUpdated2_1.lastUpdated2Schema; })))],
});
//# sourceMappingURL=data9.js.map