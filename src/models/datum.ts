/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface Datum {
  tokenAddress?: string;
  tokenId?: string;
  amount?: string;
  tokenHash?: string;
  contractType?: string;
  name?: string;
  symbol?: string | null;
  tokenUri?: string;
  metadata?: string | null;
}

export const datumSchema: Schema<Datum> = object({
  tokenAddress: ['token_address', optional(string())],
  tokenId: ['token_id', optional(string())],
  amount: ['amount', optional(string())],
  tokenHash: ['token_hash', optional(string())],
  contractType: ['contract_type', optional(string())],
  name: ['name', optional(string())],
  symbol: ['symbol', optional(nullable(string()))],
  tokenUri: ['token_uri', optional(string())],
  metadata: ['metadata', optional(nullable(string()))],
});
