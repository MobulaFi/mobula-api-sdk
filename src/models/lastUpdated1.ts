/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema } from '../schema';

export interface LastUpdated1 {
  /** Timestamp of the last normal transaction. */
  normal?: number;
  /** Timestamp of the last internal transaction. */
  internal?: number;
  /** Timestamp of the last token transaction. */
  token?: number;
  /** Timestamp of the last update */
  lastUpdated?: bigint;
}

export const lastUpdated1Schema: Schema<LastUpdated1> = object({
  normal: ['normal', optional(number())],
  internal: ['internal', optional(number())],
  token: ['token', optional(number())],
  lastUpdated: ['last_updated', optional(bigint())],
});