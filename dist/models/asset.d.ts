/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
export interface Asset {
    audit?: string;
    blockchains?: string[];
    circulatingSupply?: number;
    circulatingSupplyAddresses?: string[];
    contracts?: string[];
    description?: string;
    discord?: string;
    id?: number;
    kyc?: string;
    liquidity?: number;
    logo?: string;
    marketCap?: number;
    name?: string;
    price?: number;
    symbol?: string;
    totalSupply?: number;
    totalSupplyContracts?: string[];
    twitter?: string;
    volume?: number;
    website?: string;
}
export declare const assetSchema: Schema<Asset>;
