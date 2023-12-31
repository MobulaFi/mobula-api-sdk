/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Token02, token02Schema } from './token02';

export interface MultiPair {
  address?: string;
  token0?: Token02;
  token1?: Token02;
  liquidity?: number;
  volume?: number;
  price?: number;
  protocol?: string;
  blockchain?: string;
  exchange?: string | null;
  factory?: string | null;
}

export const multiPairSchema: Schema<MultiPair> = object({
  address: ['address', optional(string())],
  token0: ['token0', optional(lazy(() => token02Schema))],
  token1: ['token1', optional(lazy(() => token02Schema))],
  liquidity: ['liquidity', optional(number())],
  volume: ['volume', optional(number())],
  price: ['price', optional(number())],
  protocol: ['protocol', optional(string())],
  blockchain: ['blockchain', optional(string())],
  exchange: ['exchange', optional(nullable(string()))],
  factory: ['factory', optional(nullable(string()))],
});
