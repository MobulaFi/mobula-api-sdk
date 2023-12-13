"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
var tslib_1 = require("tslib");
var errorResponseError_1 = require("../errors/errorResponseError");
var allResponse_1 = require("../models/allResponse");
var asset_1 = require("../models/asset");
var marketDataResponse_1 = require("../models/marketDataResponse");
var marketHistoryResponse_1 = require("../models/marketHistoryResponse");
var marketPairResponse_1 = require("../models/marketPairResponse");
var marketPairsResponse_1 = require("../models/marketPairsResponse");
var multiDataResponse_1 = require("../models/multiDataResponse");
var orderEnum_1 = require("../models/orderEnum");
var quoteResponse1_1 = require("../models/quoteResponse1");
var searchResponse_1 = require("../models/searchResponse");
var tradeHistoryResponse_1 = require("../models/tradeHistoryResponse");
var typeEnum_1 = require("../models/typeEnum");
var walletHistoryResponse_1 = require("../models/walletHistoryResponse");
var walletNftsResponse1_1 = require("../models/walletNftsResponse1");
var walletPortfolioResponse1_1 = require("../models/walletPortfolioResponse1");
var walletTransactionsResponse_1 = require("../models/walletTransactionsResponse");
var schema_1 = require("../schema");
var baseController_1 = require("./baseController");
var ApiController = /** @class */ (function (_super) {
    tslib_1.__extends(ApiController, _super);
    function ApiController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param name Name or symbol (or starting name/symbol) of the asset
     * @return Response from the API call
     */
    ApiController.prototype.searchCryptoByName = function (name, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/search');
                mapped = req.prepareArgs({ name: [name, (0, schema_1.optional)((0, schema_1.string)())] });
                req.query('name', mapped.name);
                return [2 /*return*/, req.callAsJson(searchResponse_1.searchResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param wallet      Wallet address or ENS or Mobula username
     * @param force       Will force a new on-chain data fetch
     * @param blockchains Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or
     *                               chain name
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletNFTs = function (wallet, force, blockchains, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/nfts');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.optional)((0, schema_1.string)())],
                    force: [force, (0, schema_1.optional)((0, schema_1.boolean)())],
                    blockchains: [blockchains, (0, schema_1.optional)((0, schema_1.string)())],
                });
                req.query('wallet', mapped.wallet);
                req.query('force', mapped.force);
                req.query('blockchains', mapped.blockchains);
                return [2 /*return*/, req.callAsJson(walletNftsResponse1_1.walletNftsResponse1Schema, requestOptions)];
            });
        });
    };
    /**
     * @param fields Extra fields needed
     * @return Response from the API call
     */
    ApiController.prototype.fetchAllCryptoDetails = function (fields, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/all');
                mapped = req.prepareArgs({ fields: [fields, (0, schema_1.optional)((0, schema_1.string)())] });
                req.query('fields', mapped.fields);
                return [2 /*return*/, req.callAsJson(allResponse_1.allResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
     * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     * @param symbol     Symbol of the asset - only mandatory if no asset name/contract is provided
     * @return Response from the API call
     */
    ApiController.prototype.fetchAssetMarketData = function (asset, blockchain, symbol, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/data');
                mapped = req.prepareArgs({
                    asset: [asset, (0, schema_1.optional)((0, schema_1.string)())],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                    symbol: [symbol, (0, schema_1.optional)((0, schema_1.string)())],
                });
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                req.query('symbol', mapped.symbol);
                return [2 /*return*/, req.callAsJson(marketDataResponse_1.marketDataResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param address    The address of the smart-contract of the pair (or pool, or vault).
     * @param blockchain Blockchain of the pair (only mandatory for Balancer V2 pairs).
     * @param asset      The name/address of the asset you want in return
     * @return Response from the API call
     */
    ApiController.prototype.fetchPairMarketData = function (address, blockchain, asset, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/pair');
                mapped = req.prepareArgs({
                    address: [address, (0, schema_1.string)()],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                    asset: [asset, (0, schema_1.optional)((0, schema_1.unknown)())],
                });
                req.query('address', mapped.address);
                req.query('blockchain', mapped.blockchain);
                req.query('asset', mapped.asset);
                return [2 /*return*/, req.callAsJson(marketPairResponse_1.marketPairResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
     * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     * @param offset     The offset of the results
     * @return Response from the API call
     */
    ApiController.prototype.fetchPairsMarketData = function (asset, blockchain, offset, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/pairs');
                mapped = req.prepareArgs({
                    asset: [asset, (0, schema_1.string)()],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                    offset: [offset, (0, schema_1.optional)((0, schema_1.number)())],
                });
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                req.query('offset', mapped.offset);
                return [2 /*return*/, req.callAsJson(marketPairsResponse_1.marketPairsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
     * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     * @param from       JS Timestamp (milliseconds) of the beginning of the timeframe (if not provided,
     *                             genesis)
     * @param to         JS Timestamp (milliseconds) of the end of the timeframe (if not provided, end)
     * @return Response from the API call
     */
    ApiController.prototype.fetchAssetMarketHistory = function (asset, blockchain, from, to, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/history');
                mapped = req.prepareArgs({
                    asset: [asset, (0, schema_1.string)()],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                    from: [from, (0, schema_1.optional)((0, schema_1.number)())],
                    to: [to, (0, schema_1.optional)((0, schema_1.number)())],
                });
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                req.query('from', mapped.from);
                req.query('to', mapped.to);
                return [2 /*return*/, req.callAsJson(marketHistoryResponse_1.marketHistoryResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param assets      Comma separated list of asset names or Ethereum addresses (max 500)
     * @param blockchains Comma separated list of blockchain names
     * @param symbols     Comma separated list of symbols
     * @return Response from the API call
     */
    ApiController.prototype.fetchMultipleAssetMarketData = function (assets, blockchains, symbols, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/multi-data');
                mapped = req.prepareArgs({
                    assets: [assets, (0, schema_1.optional)((0, schema_1.string)())],
                    blockchains: [blockchains, (0, schema_1.optional)((0, schema_1.string)())],
                    symbols: [symbols, (0, schema_1.optional)((0, schema_1.string)())],
                });
                req.query('assets', mapped.assets);
                req.query('blockchains', mapped.blockchains);
                req.query('symbols', mapped.symbols);
                req.throwOn(400, errorResponseError_1.ErrorResponseError, 'Bad request response.');
                return [2 /*return*/, req.callAsJson(multiDataResponse_1.multiDataResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param asset      Asset name or contract address to retrieve trade history for.
     * @param maxResults Maximum number of results to return.
     * @return Response from the API call
     */
    ApiController.prototype.fetchAssetTradeHistory = function (asset, maxResults, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/trades');
                mapped = req.prepareArgs({
                    asset: [asset, (0, schema_1.string)()],
                    maxResults: [maxResults, (0, schema_1.optional)((0, schema_1.number)())],
                });
                req.query('asset', mapped.asset);
                req.query('maxResults', mapped.maxResults);
                req.throwOn(400, errorResponseError_1.ErrorResponseError, 'Bad request (e.g., missing asset parameter)');
                return [2 /*return*/, req.callAsJson(tradeHistoryResponse_1.tradeHistoryResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param asset      Name or contract address of the asset
     * @param blockchain Blockchain of the asset
     * @return Response from the API call
     */
    ApiController.prototype.fetchAssetMetadata = function (asset, blockchain, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/metadata');
                mapped = req.prepareArgs({
                    asset: [asset, (0, schema_1.string)()],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                });
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                return [2 /*return*/, req.callAsJson(asset_1.assetSchema, requestOptions)];
            });
        });
    };
    /**
     * @param chain       Blockchain of the trade
     * @param fromToken   Source token for the swap
     * @param toToken     Destination token for the swap
     * @param fromAddress Address that triggers the trade
     * @param amount      Amount (x decimals) for the swap in
     * @param slippage    Slippage (%) accepted
     * @param receiver    Address that receives the trade (by default, the sender)
     * @param type        Aggregation type (fast or best)
     * @return Response from the API call
     */
    ApiController.prototype.fetchSwapQuote = function (chain, fromToken, toToken, fromAddress, amount, slippage, receiver, type, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/quote');
                mapped = req.prepareArgs({
                    chain: [chain, (0, schema_1.string)()],
                    fromToken: [fromToken, (0, schema_1.string)()],
                    toToken: [toToken, (0, schema_1.string)()],
                    fromAddress: [fromAddress, (0, schema_1.string)()],
                    amount: [amount, (0, schema_1.bigint)()],
                    slippage: [slippage, (0, schema_1.number)()],
                    receiver: [receiver, (0, schema_1.optional)((0, schema_1.string)())],
                    type: [type, (0, schema_1.optional)(typeEnum_1.typeEnumSchema)],
                });
                req.query('chain', mapped.chain);
                req.query('fromToken', mapped.fromToken);
                req.query('toToken', mapped.toToken);
                req.query('fromAddress', mapped.fromAddress);
                req.query('amount', mapped.amount);
                req.query('slippage', mapped.slippage);
                req.query('receiver', mapped.receiver);
                req.query('type', mapped.type);
                return [2 /*return*/, req.callAsJson(quoteResponse1_1.quoteResponse1Schema, requestOptions)];
            });
        });
    };
    /**
     * @param wallet      The user wallet queried
     * @param from        JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided,
     *                              genesis)
     * @param to          JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
     * @param blockchains Blockchains to fetch history from (by default, all) - comma separated, chain ID or
     *                              chain name
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletHistoryBalance = function (wallet, from, to, blockchains, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/history');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.string)()],
                    from: [from, (0, schema_1.optional)((0, schema_1.number)())],
                    to: [to, (0, schema_1.optional)((0, schema_1.number)())],
                    blockchains: [blockchains, (0, schema_1.optional)((0, schema_1.string)())],
                });
                req.query('wallet', mapped.wallet);
                req.query('from', mapped.from);
                req.query('to', mapped.to);
                req.query('blockchains', mapped.blockchains);
                return [2 /*return*/, req.callAsJson(walletHistoryResponse_1.walletHistoryResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Get the portfolio of holdings from any EVM-compatible wallets, at any time
     *
     * @param wallet      The user wallet queried
     * @param blockchains Blockchains to fetch holdings from (by default, all) - comma separated, chain ID or
     *                               chain name
     * @param cache       Will use cached data if available
     * @param stale       Amount of seconds after which the cache is considered stale (default 5min)
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletHoldings = function (wallet, blockchains, cache, stale, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/portfolio');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.string)()],
                    blockchains: [blockchains, (0, schema_1.optional)((0, schema_1.string)())],
                    cache: [cache, (0, schema_1.optional)((0, schema_1.boolean)())],
                    stale: [stale, (0, schema_1.optional)((0, schema_1.number)())],
                });
                req.query('wallet', mapped.wallet);
                req.query('blockchains', mapped.blockchains);
                req.query('cache', mapped.cache);
                req.query('stale', mapped.stale);
                return [2 /*return*/, req.callAsJson(walletPortfolioResponse1_1.walletPortfolioResponse1Schema, requestOptions)];
            });
        });
    };
    /**
     * Retrieve all transactions for a specified wallet within a given timeframe.
     *
     * @param wallet      The user wallet queried
     * @param from        Start of the timeframe for transactions (timestamp)
     * @param to          End of the timeframe for transactions (timestamp)
     * @param asset       Specific asset to filter transactions
     * @param blockchains Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or
     *                                 chain name
     * @param limit       Number of transactions to return per page
     * @param offset      Number of transactions to skip
     * @param order       Example: asc
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletTransactions = function (wallet, from, to, asset, blockchains, limit, offset, order, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/transactions');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.string)()],
                    from: [from, (0, schema_1.optional)((0, schema_1.number)())],
                    to: [to, (0, schema_1.optional)((0, schema_1.number)())],
                    asset: [asset, (0, schema_1.optional)((0, schema_1.string)())],
                    blockchains: [blockchains, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    offset: [offset, (0, schema_1.optional)((0, schema_1.number)())],
                    order: [order, (0, schema_1.optional)(orderEnum_1.orderEnumSchema)],
                });
                req.query('wallet', mapped.wallet);
                req.query('from', mapped.from);
                req.query('to', mapped.to);
                req.query('asset', mapped.asset);
                req.query('blockchains', mapped.blockchains);
                req.query('limit', mapped.limit);
                req.query('offset', mapped.offset);
                req.query('order', mapped.order);
                return [2 /*return*/, req.callAsJson(walletTransactionsResponse_1.walletTransactionsResponseSchema, requestOptions)];
            });
        });
    };
    return ApiController;
}(baseController_1.BaseController));
exports.ApiController = ApiController;
//# sourceMappingURL=apiController.js.map