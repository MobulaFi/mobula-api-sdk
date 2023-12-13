/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

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

export const searchCryptoDataSchema: Schema<SearchCryptoData> = object({
  blockchains: ['blockchains', optional(array(string()))],
  contracts: ['contracts', optional(array(nullable(string())))],
  id: ['id', optional(number())],
  liquidity: ['liquidity', optional(bigint())],
  logo: ['logo', optional(string())],
  marketCap: ['market_cap', optional(bigint())],
  name: ['name', optional(string())],
  price: ['price', optional(number())],
  symbol: ['symbol', optional(string())],
  twitter: ['twitter', optional(nullable(string()))],
  volume: ['volume', optional(bigint())],
  website: ['website', optional(nullable(string()))],
});
