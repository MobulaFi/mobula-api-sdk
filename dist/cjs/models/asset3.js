"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.asset3Schema = void 0;
var schema_1 = require("../schema");
var asset4_1 = require("./asset4");
var crossChainBalances_1 = require("./crossChainBalances");
exports.asset3Schema = (0, schema_1.object)({
    asset: ['asset', (0, schema_1.optional)((0, schema_1.lazy)(function () { return asset4_1.asset4Schema; }))],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    estimatedBalance: ['estimated_balance', (0, schema_1.optional)((0, schema_1.number)())],
    tokenBalance: ['token_balance', (0, schema_1.optional)((0, schema_1.number)())],
    crossChainBalances: [
        'cross_chain_balances',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return crossChainBalances_1.crossChainBalancesSchema; }))),
    ],
});
//# sourceMappingURL=asset3.js.map