/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Data8 } from './data8';
import { LastUpdated1 } from './lastUpdated1';
export interface WalletPortfolioResponse1 {
    data?: Data8;
    lastUpdated?: Record<string, LastUpdated1>;
}
export declare const walletPortfolioResponse1Schema: Schema<WalletPortfolioResponse1>;