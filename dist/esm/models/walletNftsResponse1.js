/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, lazy, object, optional } from '../schema';
import { datumSchema } from './datum';
export const walletNftsResponse1Schema = object({
    data: ['data', optional(array(lazy(() => datumSchema)))],
});
//# sourceMappingURL=walletNftsResponse1.js.map