/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Asset1 } from './asset1';
export interface Trade {
    /** The amount of asset in the trade. */
    amount?: number;
    /** The amount in USD of the trade. */
    amountUsd?: number;
    asset?: Asset1;
    /** The blockchain used for the trade. */
    blockchain?: string;
    /** The from address of the trade. */
    from?: string;
    /** The timestamp of the trade. */
    timestamp?: number;
    /** The to address of the trade. */
    to?: string;
}
export declare const tradeSchema: Schema<Trade>;
