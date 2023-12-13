"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketMetricsSchema = void 0;
var schema_1 = require("../schema");
exports.marketMetricsSchema = (0, schema_1.object)({
    marketCap: ['market_cap', (0, schema_1.optional)((0, schema_1.number)())],
    marketCapDiluted: ['market_cap_diluted', (0, schema_1.optional)((0, schema_1.number)())],
    liquidity: ['liquidity', (0, schema_1.optional)((0, schema_1.number)())],
    liquidityChange24h: ['liquidity_change_24h', (0, schema_1.optional)((0, schema_1.number)())],
    price: ['price', (0, schema_1.optional)((0, schema_1.number)())],
    offChainVolume: ['off_chain_volume', (0, schema_1.optional)((0, schema_1.number)())],
    volume: ['volume', (0, schema_1.optional)((0, schema_1.number)())],
    volumeChange24h: ['volume_change_24h', (0, schema_1.optional)((0, schema_1.number)())],
    volume7d: ['volume_7d', (0, schema_1.optional)((0, schema_1.number)())],
    isListed: ['is_listed', (0, schema_1.optional)((0, schema_1.boolean)())],
    priceChange24h: ['price_change_24h', (0, schema_1.optional)((0, schema_1.number)())],
    priceChange1h: ['price_change_1h', (0, schema_1.optional)((0, schema_1.number)())],
    priceChange7d: ['price_change_7d', (0, schema_1.optional)((0, schema_1.number)())],
    priceChange1m: ['price_change_1m', (0, schema_1.optional)((0, schema_1.number)())],
    priceChange1y: ['price_change_1y', (0, schema_1.optional)((0, schema_1.number)())],
    ath: ['ath', (0, schema_1.optional)((0, schema_1.number)())],
    atl: ['atl', (0, schema_1.optional)((0, schema_1.number)())],
});
//# sourceMappingURL=marketMetrics.js.map