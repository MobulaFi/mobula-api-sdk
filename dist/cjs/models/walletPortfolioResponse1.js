"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletPortfolioResponse1Schema = void 0;
var schema_1 = require("../schema");
var data8_1 = require("./data8");
var lastUpdated1_1 = require("./lastUpdated1");
exports.walletPortfolioResponse1Schema = (0, schema_1.object)({
    data: ['data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return data8_1.data8Schema; }))],
    lastUpdated: [
        'lastUpdated',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return lastUpdated1_1.lastUpdated1Schema; }))),
    ],
});
//# sourceMappingURL=walletPortfolioResponse1.js.map