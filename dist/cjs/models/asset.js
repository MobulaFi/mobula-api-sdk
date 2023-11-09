"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetSchema = void 0;
var schema_1 = require("../schema");
exports.assetSchema = (0, schema_1.object)({
    audit: ['audit', (0, schema_1.optional)((0, schema_1.string)())],
    blockchains: ['blockchains', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    circulatingSupply: ['circulating_supply', (0, schema_1.optional)((0, schema_1.number)())],
    circulatingSupplyAddresses: [
        'circulating_supply_addresses',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)())),
    ],
    contracts: ['contracts', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.string)())],
    discord: ['discord', (0, schema_1.optional)((0, schema_1.string)())],
    id: ['id', (0, schema_1.optional)((0, schema_1.number)())],
    kyc: ['kyc', (0, schema_1.optional)((0, schema_1.string)())],
    liquidity: ['liquidity', (0, schema_1.optional)((0, schema_1.number)())],
    logo: ['logo', (0, schema_1.optional)((0, schema_1.string)())],
    marketCap: ['market_cap', (0, schema_1.optional)((0, schema_1.number)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.string)())],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    symbol: ['symbol', (0, schema_1.optional)((0, schema_1.string)())],
    totalSupply: ['total_supply', (0, schema_1.optional)((0, schema_1.number)())],
    totalSupplyContracts: ['total_supply_contracts', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    twitter: ['twitter', (0, schema_1.optional)((0, schema_1.string)())],
    volume: ['volume', (0, schema_1.optional)((0, schema_1.number)())],
    website: ['website', (0, schema_1.optional)((0, schema_1.string)())],
});
//# sourceMappingURL=asset.js.map