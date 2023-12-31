/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface Asset4 {
  name?: string;
  symbol?: string;
  id?: number;
  contracts?: string[];
  logo?: string;
}

export const asset4Schema: Schema<Asset4> = object({
  name: ['name', optional(string())],
  symbol: ['symbol', optional(string())],
  id: ['id', optional(number())],
  contracts: ['contracts', optional(array(string()))],
  logo: ['logo', optional(string())],
});
