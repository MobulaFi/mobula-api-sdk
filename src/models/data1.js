/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, lazy, object, optional } from '../schema';
import { pair2Schema } from './pair2';
export const data1Schema = object({
    pairs: ['pairs', optional(array(lazy(() => pair2Schema)))],
});
//# sourceMappingURL=data1.js.map