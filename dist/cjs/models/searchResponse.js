"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchResponseSchema = void 0;
var schema_1 = require("../schema");
var searchCryptoData_1 = require("./searchCryptoData");
exports.searchResponseSchema = (0, schema_1.object)({
    data: ['data', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return searchCryptoData_1.searchCryptoDataSchema; })))],
});
//# sourceMappingURL=searchResponse.js.map