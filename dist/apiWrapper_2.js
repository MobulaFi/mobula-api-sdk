import { Client } from './client';
import { ApiController } from './controllers/apiController';
class Mobula {
    constructor(apiKey) {
        const client = new Client({
            apiKey: apiKey,
            timeout: 0,
        });
        this.apiController = new ApiController(client);
    }
    async fetchCryptoDataByName(options) {
        return await this.apiController.fetchCryptoDataByName(options.name, options.requestOptions);
    }
    async fetchWalletNFTs(options) {
        return await this.apiController.fetchWalletNFTs(options.wallet, options.force, options.requestOptions);
    }
    async fetchAllCryptoDetails(options) {
        return await this.apiController.fetchAllCryptoDetails(options.fields, options.requestOptions);
    }
    async fetchAssetMarketData(options) {
        return await this.apiController.fetchAssetMarketData(options.asset, options.blockchain, options.requestOptions);
    }
    async fetchAssetMarketHistory(options) {
        return await this.apiController.fetchAssetMarketHistory(options.asset, options.blockchain, options.from, options.to, options.requestOptions);
    }
    async fetchAssetMetadata(options) {
        return await this.apiController.fetchAssetMetadata(options.asset, options.requestOptions);
    }
    async fetchAssetTradeHistory(options) {
        return await this.apiController.fetchAssetTradeHistory(options.asset, options.maxResults, options.requestOptions);
    }
    async fetchMultipleAssetMarketData(options) {
        return await this.apiController.fetchMultipleAssetMarketData(options.assets, options.blockchains, options.requestOptions);
    }
    async fetchSwapQuote(options) {
        return await this.apiController.fetchSwapQuote(options.chain, options.fromToken, options.toToken, options.fromAddress, options.amount, options.slippage, options.receiver, options.type, options.requestOptions);
    }
    async fetchWalletHistoryBalance(options) {
        return await this.apiController.fetchWalletHistoryBalance(options.wallet, options.from, options.to, options.requestOptions);
    }
    async fetchWalletHoldings(options) {
        return await this.apiController.fetchWalletHoldings(options.wallet, options.timestamp, options.asset, options.blockchain, options.tokens, options.nfts, options.coins, options.requestOptions);
    }
    async fetchWalletTransactions(options) {
        return await this.apiController.fetchWalletTransactions(options.wallet, options.from, options.to, options.asset, options.blockchain, options.trades, options.transactions, options.limit, options.offset, options.order, options.requestOptions);
    }
}
// Corrected the export statement
export { Mobula };
//# sourceMappingURL=apiWrapper_2.js.map