/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Tx } from './tx';
export interface Success {
    amountOut?: string;
    error?: string;
    isAggregator?: boolean;
    protocol?: string;
    tx?: Tx;
    willFail?: boolean;
}
export declare const successSchema: Schema<Success>;
