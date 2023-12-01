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
        return await this.apiController.fetchWalletNFTs(options.wallet, options.force, options.blockchains);
    }
    async fetchAllCryptoDetails(options) {
        return await this.apiController.fetchAllCryptoDetails(options.fields, options.requestOptions);
    }
    async fetchAssetMarketData(options) {
        return await this.apiController.fetchAssetMarketData(options.asset, options.blockchain, options.requestOptions);
    }
    async fetchPairMarketData(options) {
        return await this.apiController.fetchPairMarketData(options.address, options.blockchain, options.asset, options.requestOptions);
    }
    async fetchPairsMarketData(options) {
        return await this.apiController.fetchPairsMarketData(options.asset, options.blockchain, options.offset, options.requestOptions);
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
        return await this.apiController.fetchWalletHistoryBalance(options.wallet, options.from, options.to, options.blockchains);
    }
    async fetchWalletHoldings(options) {
        return await this.apiController.fetchWalletHoldings(options.wallet, options.blockchains, options.cache, options.stale, options.requestOptions);
    }
    async fetchWalletTransactions(options) {
        return await this.apiController.fetchWalletTransactions(options.wallet, options.from, options.to, options.asset, options.blockchains, options.limit, options.offset, options.order);
    }
}
// Corrected the export statement
export { Mobula };
//# sourceMappingURL=apiWrapper_2.js.map