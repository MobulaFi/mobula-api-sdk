/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Data1, data1Schema } from './data1';

export interface MarketDataPairResponse {
  data?: Data1;
}

export const marketDataPairResponseSchema: Schema<MarketDataPairResponse> = object(
  { data: ['data', optional(lazy(() => data1Schema))] }
);
