/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, lazy, object, optional } from '../schema';
import { successSchema } from './success';
export const quoteResponse1Schema = object({
    success: ['success', optional(array(lazy(() => successSchema)))],
});
//# sourceMappingURL=quoteResponse1.js.map