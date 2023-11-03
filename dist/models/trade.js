/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { lazy, number, object, optional, string } from '../schema';
import { asset1Schema } from './asset1';
export const tradeSchema = object({
    amount: ['amount', optional(number())],
    amountUsd: ['amount_usd', optional(number())],
    asset: ['asset', optional(lazy(() => asset1Schema))],
    blockchain: ['blockchain', optional(string())],
    from: ['from', optional(string())],
    timestamp: ['timestamp', optional(number())],
    to: ['to', optional(string())],
});
//# sourceMappingURL=trade.js.map