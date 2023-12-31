/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { number, object, optional, string } from '../schema';
export const data3Schema = object({
    date: ['date', optional(number())],
    hash: ['hash', optional(string())],
    valueUsd: ['value_usd', optional(number())],
    tokenAmount: ['token_amount', optional(number())],
    tokenPrice: ['token_price', optional(number())],
    type: ['type', optional(string())],
    blockchain: ['blockchain', optional(string())],
});
//# sourceMappingURL=data3.js.map