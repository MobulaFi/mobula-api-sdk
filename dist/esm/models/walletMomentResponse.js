/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { dict, lazy, number, object, optional, string } from '../schema';
import { detailedBalanceSchema } from './detailedBalance';
export const walletMomentResponseSchema = object({
    balanceUsd: ['balance_usd', optional(number())],
    detailedBalance: [
        'detailed_balance',
        optional(dict(lazy(() => detailedBalanceSchema))),
    ],
    wallet: ['wallet', optional(string())],
});
//# sourceMappingURL=walletMomentResponse.js.map