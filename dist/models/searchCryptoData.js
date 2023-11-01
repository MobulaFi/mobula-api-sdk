/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, bigint, nullable, number, object, optional, string, } from '../schema';
export const searchCryptoDataSchema = object({
    blockchains: ['blockchains', optional(array(string()))],
    contracts: ['contracts', optional(array(string()))],
    id: ['id', optional(number())],
    liquidity: ['liquidity', optional(bigint())],
    logo: ['logo', optional(string())],
    marketCap: ['market_cap', optional(bigint())],
    name: ['name', optional(string())],
    price: ['price', optional(number())],
    symbol: ['symbol', optional(string())],
    twitter: ['twitter', optional(nullable(string()))],
    volume: ['volume', optional(bigint())],
    website: ['website', optional(nullable(string()))],
});
//# sourceMappingURL=searchCryptoData.js.map