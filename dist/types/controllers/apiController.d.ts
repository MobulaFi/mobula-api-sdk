/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { ApiResponse, RequestOptions } from '../core';
import { AllResponse } from '../models/allResponse';
import { FetchAssetMetadataResponse } from '../models/containers/fetchAssetMetadataResponse';
import { MarketDataResponse1 } from '../models/marketDataResponse1';
import { MarketHistoryResponse } from '../models/marketHistoryResponse';
import { MarketMetrics } from '../models/marketMetrics';
import { OrderEnum } from '../models/orderEnum';
import { QuoteResponse1 } from '../models/quoteResponse1';
import { SearchResponse } from '../models/searchResponse';
import { TradeHistoryItem } from '../models/tradeHistoryItem';
import { TypeEnum } from '../models/typeEnum';
import { WalletHistoryResponse } from '../models/walletHistoryResponse';
import { WalletNftsResponse1 } from '../models/walletNftsResponse1';
import { WalletPortfolioResponse } from '../models/walletPortfolioResponse';
import { WalletTransactionsResponse } from '../models/walletTransactionsResponse';
import { BaseController } from './baseController';
export declare class ApiController extends BaseController {
    /**
     * @param name Name or symbol (or starting name/symbol) of the asset
     * @return Response from the API call
     */
    fetchCryptoDataByName(name?: string, requestOptions?: RequestOptions): Promise<ApiResponse<SearchResponse>>;
    /**
     * @param wallet Wallet address or ENS or Mobula username
     * @param force  Will force a new on-chain data fetch
     * @return Response from the API call
     */
    fetchWalletNFTs(wallet?: string, force?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<WalletNftsResponse1>>;
    /**
     * @param fields Extra fields needed
     * @return Response from the API call
     */
    fetchAllCryptoDetails(fields?: string, requestOptions?: RequestOptions): Promise<ApiResponse<AllResponse>>;
    /**
     * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
     * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     * @return Response from the API call
     */
    fetchAssetMarketData(asset: string, blockchain?: string, requestOptions?: RequestOptions): Promise<ApiResponse<MarketDataResponse1>>;
    /**
     * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
     * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
     * @param from       JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided,
     *                             genesis)
     * @param to         JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
     * @return Response from the API call
     */
    fetchAssetMarketHistory(asset: string, blockchain?: string, from?: number, to?: number, requestOptions?: RequestOptions): Promise<ApiResponse<MarketHistoryResponse>>;
    /**
     * @param assets      Comma separated list of asset names or Ethereum addresses (max 50)
     * @param blockchains Comma separated list of blockchain names
     * @return Response from the API call
     */
    fetchMultipleAssetMarketData(assets: string, blockchains?: string, requestOptions?: RequestOptions): Promise<ApiResponse<Record<string, MarketMetrics>>>;
    /**
     * @param asset      Asset name or contract address to retrieve trade history for.
     * @param maxResults Maximum number of results to return.
     * @return Response from the API call
     */
    fetchAssetTradeHistory(asset: string, maxResults?: number, requestOptions?: RequestOptions): Promise<ApiResponse<TradeHistoryItem[]>>;
    /**
     * @param asset Name or contract address of the asset
     * @return Response from the API call
     */
    fetchAssetMetadata(asset?: string, requestOptions?: RequestOptions): Promise<ApiResponse<FetchAssetMetadataResponse>>;
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
    fetchSwapQuote(chain: string, fromToken: string, toToken: string, fromAddress: string, amount: bigint, slippage: number, receiver?: string, type?: TypeEnum, requestOptions?: RequestOptions): Promise<ApiResponse<QuoteResponse1>>;
    /**
     * @param wallet The user wallet queried
     * @param from   JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis)
     * @param to     JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
     * @return Response from the API call
     */
    fetchWalletHistoryBalance(wallet: string, from?: number, to?: number, requestOptions?: RequestOptions): Promise<ApiResponse<WalletHistoryResponse>>;
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
    fetchWalletHoldings(wallet: string, timestamp?: number, asset?: string, blockchain?: string, tokens?: boolean, nfts?: boolean, coins?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<WalletPortfolioResponse>>;
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
    fetchWalletTransactions(wallet: string, from?: number, to?: number, asset?: string, blockchain?: string, trades?: boolean, transactions?: boolean, limit?: number, offset?: number, order?: OrderEnum, requestOptions?: RequestOptions): Promise<ApiResponse<WalletTransactionsResponse>>;
}