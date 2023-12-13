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
import { Token0, token0Schema } from './token0';

export interface Pair2 {
  address?: string;
  token0?: Token0;
  token1?: Token0;
  liquidity?: number;
  volume?: number;
  price?: number;
  protocol?: string;
  blockchain?: string;
  exchange?: string | null;
  factory?: string;
}

export const pair2Schema: Schema<Pair2> = object({
  address: ['address', optional(string())],
  token0: ['token0', optional(lazy(() => token0Schema))],
  token1: ['token1', optional(lazy(() => token0Schema))],
  liquidity: ['liquidity', optional(number())],
  volume: ['volume', optional(number())],
  price: ['price', optional(number())],
  protocol: ['protocol', optional(string())],
  blockchain: ['blockchain', optional(string())],
  exchange: ['exchange', optional(nullable(string()))],
  factory: ['factory', optional(string())],
});