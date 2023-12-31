/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, number, object, optional, string, unknown, } from '../schema';
export const data4Schema = object({
    wallet: ['wallet', optional(array(string()))],
    balanceUsd: ['balance_usd', optional(number())],
    balanceHistory: ['balance_history', optional(array(unknown()))],
});
//# sourceMappingURL=data4.js.map