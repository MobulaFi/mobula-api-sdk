/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, lazy, object, optional } from '../schema';
import { transactionSchema } from './transaction';
export const walletTransactionsResponseSchema = object({
    transactions: [
        'transactions',
        optional(array(lazy(() => transactionSchema))),
    ],
});
//# sourceMappingURL=walletTransactionsResponse.js.map