/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { lazy, object, optional } from '../schema';
import { pairSchema } from './pair';
export const marketPairResponseSchema = object({
    data: ['data', optional(lazy(() => pairSchema))],
});
//# sourceMappingURL=marketPairResponse.js.map