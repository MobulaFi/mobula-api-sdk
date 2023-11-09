"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobula = void 0;
var tslib_1 = require("tslib");
var client_1 = require("./client");
var apiController_1 = require("./controllers/apiController");
var Mobula = /** @class */ (function () {
    function Mobula(apiKey) {
        var client = new client_1.Client({
            apiKey: apiKey,
            timeout: 0,
        });
        this.apiController = new apiController_1.ApiController(client);
    }
    Mobula.prototype.fetchCryptoDataByName = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchCryptoDataByName(options.name, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchWalletNFTs = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchWalletNFTs(options.wallet, options.force, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchAllCryptoDetails = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchAllCryptoDetails(options.fields, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchAssetMarketData = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchAssetMarketData(options.asset, options.blockchain, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchAssetMarketHistory = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchAssetMarketHistory(options.asset, options.blockchain, options.from, options.to, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchAssetMetadata = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchAssetMetadata(options.asset, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchAssetTradeHistory = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchAssetTradeHistory(options.asset, options.maxResults, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchMultipleAssetMarketData = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchMultipleAssetMarketData(options.assets, options.blockchains, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchSwapQuote = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchSwapQuote(options.chain, options.fromToken, options.toToken, options.fromAddress, options.amount, options.slippage, options.receiver, options.type, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchWalletHistoryBalance = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchWalletHistoryBalance(options.wallet, options.from, options.to, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchWalletHoldings = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchWalletHoldings(options.wallet, options.timestamp, options.asset, options.blockchain, options.tokens, options.nfts, options.coins, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mobula.prototype.fetchWalletTransactions = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiController.fetchWalletTransactions(options.wallet, options.from, options.to, options.asset, options.blockchain, options.trades, options.transactions, options.limit, options.offset, options.order, options.requestOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Mobula;
}());
exports.Mobula = Mobula;
//# sourceMappingURL=apiWrapper_2.js.map