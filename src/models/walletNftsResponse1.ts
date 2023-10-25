/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { WalletNFTData, walletNFTDataSchema } from './walletNFTData';

export interface WalletNftsResponse1 {
  data?: WalletNFTData[];
}

export const walletNftsResponse1Schema: Schema<WalletNftsResponse1> = object({
  data: ['data', optional(array(lazy(() => walletNFTDataSchema)))],
});
