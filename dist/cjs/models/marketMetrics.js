"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.marketMetricsSchema = void 0;
var schema_1 = require("../schema");
var approximations_1 = require("./approximations");
exports.marketMetricsSchema = (0, schema_1.object)({
    approximations: [
        'approximations',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return approximations_1.approximationsSchema; })),
    ],
    isListed: ['is_listed', (0, schema_1.optional)((0, schema_1.boolean)())],
    liquidity: ['liquidity', (0, schema_1.optional)((0, schema_1.number)())],
    marketCap: ['market_cap', (0, schema_1.optional)((0, schema_1.number)())],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    volume: ['volume', (0, schema_1.optional)((0, schema_1.number)())],
    volume7d: ['volume_7d', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=marketMetrics.js.map