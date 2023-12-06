"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_RETRY_CONFIG = exports.DEFAULT_CONFIGURATION = void 0;
var configuration_1 = require("./configuration");
/** Default values for the configuration parameters of the client. */
exports.DEFAULT_CONFIGURATION = {
    timeout: 0,
    apiKey: '',
    environment: configuration_1.Environment.Production,
};
/** Default values for retry configuration parameters. */
exports.DEFAULT_RETRY_CONFIG = {
    maxNumberOfRetries: 0,
    retryOnTimeout: true,
    retryInterval: 1,
    maximumRetryWaitTime: 0,
    backoffFactor: 2,
    httpStatusCodesToRetry: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
    httpMethodsToRetry: ['GET', 'PUT'],
};
//# sourceMappingURL=defaultConfiguration.js.map