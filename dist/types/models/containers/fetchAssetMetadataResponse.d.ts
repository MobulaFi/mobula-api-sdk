/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../../schema';
import { Asset } from '../asset';
/** This is a container type for one-of types. */
export type FetchAssetMetadataResponse = Asset | Asset[];
export declare const fetchAssetMetadataResponseSchema: Schema<FetchAssetMetadataResponse>;
export declare namespace FetchAssetMetadataResponse {
    /**
    * Validation method to narrow down union type to Asset type case.
    *
    * This is Asset case.
    */
    function isAsset(value: unknown): value is Asset;
    /**
    * Validation method to narrow down union type to Asset[] type case.
    *
    * This is Array of Asset case.
    */
    function isArrayOfAsset(value: unknown): value is Asset[];
}
