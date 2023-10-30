/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Asset1 } from './asset1';
export interface Transaction {
    /** The amount of asset in the transaction. */
    amount?: number;
    asset?: Asset1;
    /** The sender's address. */
    from?: string;
    /** The timestamp of the transaction. */
    timestamp?: number;
    /** The receiver's address. */
    to?: string;
}
export declare const transactionSchema: Schema<Transaction>;
