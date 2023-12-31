/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Data3, data3Schema } from './data3';

export interface TradeHistoryResponse {
  data?: Data3[];
}

export const tradeHistoryResponseSchema: Schema<TradeHistoryResponse> = object({
  data: ['data', optional(array(lazy(() => data3Schema)))],
});
