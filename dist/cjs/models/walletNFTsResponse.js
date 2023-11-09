"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletNFTsResponseSchema = void 0;
var schema_1 = require("../schema");
var nFTTransaction_1 = require("./nFTTransaction");
exports.walletNFTsResponseSchema = (0, schema_1.object)({
    transactions: [
        'transactions',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return nFTTransaction_1.nFTTransactionSchema; }))),
    ],
});
//# sourceMappingURL=walletNFTsResponse.js.map