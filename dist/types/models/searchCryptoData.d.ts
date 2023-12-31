/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
export interface SearchCryptoData {
    blockchains?: string[];
    contracts?: (string | null)[];
    id?: number;
    liquidity?: bigint;
    logo?: string;
    marketCap?: bigint;
    name?: string;
    price?: number;
    symbol?: string;
    twitter?: string | null;
    volume?: bigint;
    website?: string | null;
}
export declare const searchCryptoDataSchema: Schema<SearchCryptoData>;
