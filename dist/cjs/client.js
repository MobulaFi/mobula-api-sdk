"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var tslib_1 = require("tslib");
var authentication_1 = require("./authentication");
var clientAdapter_1 = require("./clientAdapter");
var configuration_1 = require("./configuration");
var core_1 = require("./core");
var defaultConfiguration_1 = require("./defaultConfiguration");
var USER_AGENT = 'APIMATIC 3.0';
var Client = /** @class */ (function () {
    function Client(config) {
        var _this = this;
        var _a, _b, _c, _d;
        this._config = tslib_1.__assign(tslib_1.__assign({}, defaultConfiguration_1.DEFAULT_CONFIGURATION), config);
        this._retryConfig = tslib_1.__assign(tslib_1.__assign({}, defaultConfiguration_1.DEFAULT_RETRY_CONFIG), (_a = this._config.httpClientOptions) === null || _a === void 0 ? void 0 : _a.retryConfig);
        this._timeout =
            typeof ((_b = this._config.httpClientOptions) === null || _b === void 0 ? void 0 : _b.timeout) != 'undefined'
                ? this._config.httpClientOptions.timeout
                : this._config.timeout;
        this._requestBuilderFactory = createRequestHandlerFactory(function (server) { return getBaseUri(server, _this._config); }, authentication_1.noneAuthenticationProvider, new clientAdapter_1.HttpClient(core_1.AbortError, {
            timeout: this._timeout,
            clientConfigOverrides: this._config.unstable_httpClientOptions,
            httpAgent: (_c = this._config.httpClientOptions) === null || _c === void 0 ? void 0 : _c.httpAgent,
            httpsAgent: (_d = this._config.httpClientOptions) === null || _d === void 0 ? void 0 : _d.httpsAgent,
        }), [withErrorHandlers, withUserAgent, withApiKey(this._config.apiKey)], this._retryConfig);
    }
    Client.prototype.getRequestBuilderFactory = function () {
        return this._requestBuilderFactory;
    };
    /**
     * Clone this client and override given configuration options
     */
    Client.prototype.withConfiguration = function (config) {
        return new Client(tslib_1.__assign(tslib_1.__assign({}, this._config), config));
    };
    return Client;
}());
exports.Client = Client;
function createHttpClientAdapter(client) {
    var _this = this;
    return function (request, requestOptions) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.executeRequest(request, requestOptions)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
}
function getBaseUri(server, config) {
    if (server === void 0) { server = 'default'; }
    if (config.environment === configuration_1.Environment.Production) {
        if (server === 'default') {
            return 'https://api.mobula.io/api/1';
        }
    }
    throw new Error('Could not get Base URL. Invalid environment or server.');
}
function createRequestHandlerFactory(baseUrlProvider, authProvider, httpClient, addons, retryConfig) {
    var requestBuilderFactory = (0, core_1.createRequestBuilderFactory)(createHttpClientAdapter(httpClient), baseUrlProvider, core_1.ApiError, authProvider, retryConfig);
    return tap.apply(void 0, tslib_1.__spreadArray([requestBuilderFactory], addons, false));
}
function tap(requestBuilderFactory) {
    var callback = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        callback[_i - 1] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var requestBuilder = requestBuilderFactory.apply(void 0, args);
        callback.forEach(function (c) { return c(requestBuilder); });
        return requestBuilder;
    };
}
function withErrorHandlers(rb) {
    rb.defaultToError(core_1.ApiError);
}
function withUserAgent(rb) {
    rb.header('user-agent', USER_AGENT);
}
function withApiKey(apiKey) {
    return function (rb) {
        rb.header('Authorization', apiKey);
    };
}
//# sourceMappingURL=client.js.map