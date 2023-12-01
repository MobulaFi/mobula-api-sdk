/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, lazy, object, optional } from '../schema';
import { Token0, token0Schema } from './token0';
import { Token1, token1Schema } from './token1';

export interface MarketDataPairResponse {
  token0?: Token0;
  token1?: Token1;
}

export const marketDataPairResponseSchema: Schema<MarketDataPairResponse> =
  object({
    token0: ['token0', optional(lazy(() => token0Schema))],
    token1: ['token1', optional(lazy(() => token1Schema))],
  });