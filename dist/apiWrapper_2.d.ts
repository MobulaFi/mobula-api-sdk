import { ApiResponse, RequestOptions } from './core';
import { MarketPairResponse } from './models/marketPairResponse';
import { MarketPairsResponse } from './models/marketPairsResponse';
import { OrderEnum } from './models/orderEnum';
import { TypeEnum } from './models/typeEnum';
declare class Mobula {
    private apiController;
    constructor(apiKey: string);
    fetchCryptoDataByName(options: {
        name?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").SearchResponse>>;
    fetchWalletNFTs(options: {
        wallet?: string;
        force?: boolean;
        blockchains?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").WalletNftsResponse1>>;
    fetchAllCryptoDetails(options: {
        fields?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").AllResponse>>;
    fetchAssetMarketData(options: {
        asset: string;
        blockchain?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").MarketDataResponse1>>;
    fetchPairMarketData(options: {
        address: string;
        blockchain?: string;
        asset?: unknown;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<MarketPairResponse>>;
    fetchPairsMarketData(options: {
        asset: string;
        blockchain?: string;
        offset?: number;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<MarketPairsResponse>>;
    fetchAssetMarketHistory(options: {
        asset: string;
        blockchain?: string;
        from?: number;
        to?: number;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").MarketHistoryResponse>>;
    fetchAssetMetadata(options: {
        asset?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").FetchAssetMetadataResponse>>;
    fetchAssetTradeHistory(options: {
        asset: string;
        maxResults?: number;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").TradeHistoryItem[]>>;
    fetchMultipleAssetMarketData(options: {
        assets: string;
        blockchains?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<Record<string, import(".").MarketMetrics>>>;
    fetchSwapQuote(options: {
        chain: string;
        fromToken: string;
        toToken: string;
        fromAddress: string;
        amount: bigint;
        slippage: number;
        receiver?: string;
        type?: TypeEnum;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").QuoteResponse1>>;
    fetchWalletHistoryBalance(options: {
        wallet: string;
        from?: number;
        to?: number;
        blockchains?: string;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").WalletHistoryResponse>>;
    fetchWalletHoldings(options: {
        wallet: string;
        blockchains?: string;
        cache?: boolean;
        stale?: number;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").WalletPortfolioResponse>>;
    fetchWalletTransactions(options: {
        wallet: string;
        from?: number;
        to?: number;
        asset?: string;
        blockchains?: string;
        limit?: number;
        offset?: number;
        order?: OrderEnum;
        requestOptions?: RequestOptions;
    }): Promise<ApiResponse<import(".").WalletTransactionsResponse>>;
}
export { Mobula };
