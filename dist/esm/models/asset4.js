/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, number, object, optional, string } from '../schema';
export const asset4Schema = object({
    name: ['name', optional(string())],
    symbol: ['symbol', optional(string())],
    id: ['id', optional(number())],
    contracts: ['contracts', optional(array(string()))],
    logo: ['logo', optional(string())],
});
//# sourceMappingURL=asset4.js.map