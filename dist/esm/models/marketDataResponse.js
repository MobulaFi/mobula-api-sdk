/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { lazy, object, optional } from '../schema';
import { marketMetricsSchema } from './marketMetrics';
export const marketDataResponseSchema = object({
    data: ['data', optional(lazy(() => marketMetricsSchema))],
});
//# sourceMappingURL=marketDataResponse.js.map