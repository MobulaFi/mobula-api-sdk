"use strict";
/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.ApiController = void 0;
var tslib_1 = require("tslib");
var errorResponseError_1 = require("../errors/errorResponseError");
var allResponse_1 = require("../models/allResponse");
var fetchAssetMetadataResponse_1 = require("../models/containers/fetchAssetMetadataResponse");
var marketDataResponse1_1 = require("../models/marketDataResponse1");
var marketHistoryResponse_1 = require("../models/marketHistoryResponse");
var marketMetrics_1 = require("../models/marketMetrics");
var orderEnum_1 = require("../models/orderEnum");
var quoteResponse1_1 = require("../models/quoteResponse1");
var searchResponse_1 = require("../models/searchResponse");
var tradeHistoryItem_1 = require("../models/tradeHistoryItem");
var typeEnum_1 = require("../models/typeEnum");
var walletHistoryResponse_1 = require("../models/walletHistoryResponse");
var walletNftsResponse1_1 = require("../models/walletNftsResponse1");
var walletPortfolioResponse_1 = require("../models/walletPortfolioResponse");
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
    ApiController.prototype.fetchCryptoDataByName = function (name, requestOptions) {
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
     * @param wallet Wallet address or ENS or Mobula username
     * @param force  Will force a new on-chain data fetch
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletNFTs = function (wallet, force, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/nfts');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.optional)((0, schema_1.string)())],
                    force: [force, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('wallet', mapped.wallet);
                req.query('force', mapped.force);
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
     * @return Response from the API call
     */
    ApiController.prototype.fetchAssetMarketData = function (asset, blockchain, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/data');
                mapped = req.prepareArgs({
                    asset: [asset, (0, schema_1.string)()],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                return [2 /*return*/, req.callAsJson(marketDataResponse1_1.marketDataResponse1Schema, requestOptions)];
            });
        });
    };
    /**
     * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
     * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     * @param from       JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided,
     *                             genesis)
     * @param to         JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
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
                    to: [to, (0, schema_1.optional)((0, schema_1.number)())]
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
     * @param assets      Comma separated list of asset names or Ethereum addresses (max 50)
     * @param blockchains Comma separated list of blockchain names
     * @return Response from the API call
     */
    ApiController.prototype.fetchMultipleAssetMarketData = function (assets, blockchains, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/market/multi-data');
                mapped = req.prepareArgs({
                    assets: [assets, (0, schema_1.string)()],
                    blockchains: [blockchains, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('assets', mapped.assets);
                req.query('blockchains', mapped.blockchains);
                req.throwOn(400, errorResponseError_1.ErrorResponseError, 'Invalid input - too many assets or invalid blockchain name');
                return [2 /*return*/, req.callAsJson((0, schema_1.dict)(marketMetrics_1.marketMetricsSchema), requestOptions)];
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
                    maxResults: [maxResults, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('asset', mapped.asset);
                req.query('maxResults', mapped.maxResults);
                req.throwOn(400, errorResponseError_1.ErrorResponseError, 'Bad request (e.g., missing asset parameter)');
                return [2 /*return*/, req.callAsJson((0, schema_1.array)(tradeHistoryItem_1.tradeHistoryItemSchema), requestOptions)];
            });
        });
    };
    /**
     * @param asset Name or contract address of the asset
     * @return Response from the API call
     */
    ApiController.prototype.fetchAssetMetadata = function (asset, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/metadata');
                mapped = req.prepareArgs({ asset: [asset, (0, schema_1.optional)((0, schema_1.string)())] });
                req.query('asset', mapped.asset);
                return [2 /*return*/, req.callAsJson(fetchAssetMetadataResponse_1.fetchAssetMetadataResponseSchema, requestOptions)];
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
                    type: [type, (0, schema_1.optional)(typeEnum_1.typeEnumSchema)]
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
     * @param wallet The user wallet queried
     * @param from   JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis)
     * @param to     JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletHistoryBalance = function (wallet, from, to, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/history');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.string)()],
                    from: [from, (0, schema_1.optional)((0, schema_1.number)())],
                    to: [to, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('wallet', mapped.wallet);
                req.query('from', mapped.from);
                req.query('to', mapped.to);
                return [2 /*return*/, req.callAsJson(walletHistoryResponse_1.walletHistoryResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param wallet     The user wallet queried
     * @param timestamp  ISO Date string from which you want to start receiving transactions - NOW by
     *                              default
     * @param asset      The asset you want to target (empty if you want general portfolio)
     * @param blockchain The blockchain you want to target (empty if you want general transactions)
     * @param tokens     true if tokens included (true by default)
     * @param nfts       true if nfts included (false by default)
     * @param coins      true if coins included (true by default)
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletHoldings = function (wallet, timestamp, asset, blockchain, tokens, nfts, coins, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/portfolio');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.string)()],
                    timestamp: [timestamp, (0, schema_1.optional)((0, schema_1.number)())],
                    asset: [asset, (0, schema_1.optional)((0, schema_1.string)())],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                    tokens: [tokens, (0, schema_1.optional)((0, schema_1.boolean)())],
                    nfts: [nfts, (0, schema_1.optional)((0, schema_1.boolean)())],
                    coins: [coins, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('wallet', mapped.wallet);
                req.query('timestamp', mapped.timestamp);
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                req.query('tokens', mapped.tokens);
                req.query('nfts', mapped.nfts);
                req.query('coins', mapped.coins);
                return [2 /*return*/, req.callAsJson(walletPortfolioResponse_1.walletPortfolioResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param wallet       The user wallet queried
     * @param from         ISO Date string OR Timestamp from which you want to start receiving
     *                                  transactions
     * @param to           ISO Date string OR Timestamp until which you want to receive transactions
     * @param asset        The asset you want to target, use the asset's name (empty if you want general
     *                                  transactions)
     * @param blockchain   The blockchain you want to target (empty if you want general transactions)
     * @param trades       true if trades included (true by default)
     * @param transactions true if non-trades transactions included (true by default)
     * @param limit        Number of transactions to return (100 by default)
     * @param offset       Number of pages to skip (0 by default) - limit * offset = number of transactions
     *                                  to skip
     * @param order        Order in which transactions should be sorted. Use 'asc' for ascending and 'desc'
     *                                  for descending.
     * @return Response from the API call
     */
    ApiController.prototype.fetchWalletTransactions = function (wallet, from, to, asset, blockchain, trades, transactions, limit, offset, order, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/wallet/transactions');
                mapped = req.prepareArgs({
                    wallet: [wallet, (0, schema_1.string)()],
                    from: [from, (0, schema_1.optional)((0, schema_1.number)())],
                    to: [to, (0, schema_1.optional)((0, schema_1.number)())],
                    asset: [asset, (0, schema_1.optional)((0, schema_1.string)())],
                    blockchain: [blockchain, (0, schema_1.optional)((0, schema_1.string)())],
                    trades: [trades, (0, schema_1.optional)((0, schema_1.boolean)())],
                    transactions: [transactions, (0, schema_1.optional)((0, schema_1.boolean)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    offset: [offset, (0, schema_1.optional)((0, schema_1.number)())],
                    order: [order, (0, schema_1.optional)(orderEnum_1.orderEnumSchema)]
                });
                req.query('wallet', mapped.wallet);
                req.query('from', mapped.from);
                req.query('to', mapped.to);
                req.query('asset', mapped.asset);
                req.query('blockchain', mapped.blockchain);
                req.query('trades', mapped.trades);
                req.query('transactions', mapped.transactions);
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