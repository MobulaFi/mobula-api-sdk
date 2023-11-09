/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { HttpClientOptions } from './clientAdapter';
/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
    apiKey: string;
    timeout: number;
    environment: Environment;
    httpClientOptions?: Partial<HttpClientOptions>;
    unstable_httpClientOptions?: any;
}
/** Environments available for API */
export declare enum Environment {
    Production = "production"
}