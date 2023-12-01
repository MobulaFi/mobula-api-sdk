/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ErrorResponseError } from '../errors/errorResponseError';
import { AllResponse, allResponseSchema } from '../models/allResponse';
import {
  FetchAssetMetadataResponse,
  fetchAssetMetadataResponseSchema,
} from '../models/containers/fetchAssetMetadataResponse';
import {
  MarketDataResponse1,
  marketDataResponse1Schema,
} from '../models/marketDataResponse1';
import {
  MarketHistoryResponse,
  marketHistoryResponseSchema,
} from '../models/marketHistoryResponse';
import { MarketMetrics, marketMetricsSchema } from '../models/marketMetrics';
import {
  MarketPairResponse,
  marketPairResponseSchema,
} from '../models/marketPairResponse';
import {
  MarketPairsResponse,
  marketPairsResponseSchema,
} from '../models/marketPairsResponse';
import { OrderEnum, orderEnumSchema } from '../models/orderEnum';
import { QuoteResponse1, quoteResponse1Schema } from '../models/quoteResponse1';
import { SearchResponse, searchResponseSchema } from '../models/searchResponse';
import {
  TradeHistoryItem,
  tradeHistoryItemSchema,
} from '../models/tradeHistoryItem';
import { TypeEnum, typeEnumSchema } from '../models/typeEnum';
import {
  WalletHistoryResponse,
  walletHistoryResponseSchema,
} from '../models/walletHistoryResponse';
import {
  WalletNftsResponse1,
  walletNftsResponse1Schema,
} from '../models/walletNftsResponse1';
import {
  WalletPortfolioResponse,
  walletPortfolioResponseSchema,
} from '../models/walletPortfolioResponse';
import {
  WalletTransactionsResponse,
  walletTransactionsResponseSchema,
} from '../models/walletTransactionsResponse';
import {
  array,
  bigint,
  boolean,
  dict,
  number,
  optional,
  string,
  unknown,
} from '../schema';
import { BaseController } from './baseController';

export class ApiController extends BaseController {
  /**
   * @param name Name or symbol (or starting name/symbol) of the asset
   * @return Response from the API call
   */
  async fetchCryptoDataByName(
    name?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SearchResponse>> {
    const req = this.createRequest('GET', '/search');
    const mapped = req.prepareArgs({ name: [name, optional(string())] });
    req.query('name', mapped.name);
    return req.callAsJson(searchResponseSchema, requestOptions);
  }

  /**
   * @param wallet      Wallet address or ENS or Mobula username
   * @param force       Will force a new on-chain data fetch
   * @param blockchains Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or
   *                               chain name
   * @return Response from the API call
   */
  async fetchWalletNFTs(
    wallet?: string,
    force?: boolean,
    blockchains?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletNftsResponse1>> {
    const req = this.createRequest('GET', '/wallet/nfts');
    const mapped = req.prepareArgs({
      wallet: [wallet, optional(string())],
      force: [force, optional(boolean())],
      blockchains: [blockchains, optional(string())],
    });
    req.query('wallet', mapped.wallet);
    req.query('force', mapped.force);
    req.query('blockchains', mapped.blockchains);
    return req.callAsJson(walletNftsResponse1Schema, requestOptions);
  }

  /**
   * @param fields Extra fields needed
   * @return Response from the API call
   */
  async fetchAllCryptoDetails(
    fields?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AllResponse>> {
    const req = this.createRequest('GET', '/all');
    const mapped = req.prepareArgs({ fields: [fields, optional(string())] });
    req.query('fields', mapped.fields);
    return req.callAsJson(allResponseSchema, requestOptions);
  }

  /**
   * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
   * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
   * @return Response from the API call
   */
  async fetchAssetMarketData(
    asset: string,
    blockchain?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MarketDataResponse1>> {
    const req = this.createRequest('GET', '/market/data');
    const mapped = req.prepareArgs({
      asset: [asset, string()],
      blockchain: [blockchain, optional(string())],
    });
    req.query('asset', mapped.asset);
    req.query('blockchain', mapped.blockchain);
    return req.callAsJson(marketDataResponse1Schema, requestOptions);
  }

  /**
   * @param address    The address of the smart-contract of the pair (or pool, or vault).
   * @param blockchain Blockchain of the pair (only mandatory for Balancer V2 pairs).
   * @param asset      The name/address of the asset you want in return
   * @return Response from the API call
   */
  async fetchPairMarketData(
    address: string,
    blockchain?: string,
    asset?: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MarketPairResponse>> {
    const req = this.createRequest('GET', '/market/pair');
    const mapped = req.prepareArgs({
      address: [address, string()],
      blockchain: [blockchain, optional(string())],
      asset: [asset, optional(unknown())],
    });
    req.query('address', mapped.address);
    req.query('blockchain', mapped.blockchain);
    req.query('asset', mapped.asset as string);
    return req.callAsJson(marketPairResponseSchema, requestOptions);
  }

  /**
   * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
   * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
   * @param offset     The offset of the results
   * @return Response from the API call
   */
  async fetchPairsMarketData(
    asset: string,
    blockchain?: string,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MarketPairsResponse>> {
    const req = this.createRequest('GET', '/market/pairs');
    const mapped = req.prepareArgs({
      asset: [asset, string()],
      blockchain: [blockchain, optional(string())],
      offset: [offset, optional(number())],
    });
    req.query('asset', mapped.asset);
    req.query('blockchain', mapped.blockchain);
    req.query('offset', mapped.offset);
    return req.callAsJson(marketPairsResponseSchema, requestOptions);
  }

  /**
   * @param asset      The asset you want to target - asset name only works for assets listed on Mobula.
   * @param blockchain Blockchain of the asset - only mandatory if asset is sent as smart-contract.
   * @param from       JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided,
   *                             genesis)
   * @param to         JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
   * @return Response from the API call
   */
  async fetchAssetMarketHistory(
    asset: string,
    blockchain?: string,
    from?: number,
    to?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MarketHistoryResponse>> {
    const req = this.createRequest('GET', '/market/history');
    const mapped = req.prepareArgs({
      asset: [asset, string()],
      blockchain: [blockchain, optional(string())],
      from: [from, optional(number())],
      to: [to, optional(number())],
    });
    req.query('asset', mapped.asset);
    req.query('blockchain', mapped.blockchain);
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    return req.callAsJson(marketHistoryResponseSchema, requestOptions);
  }

  /**
   * @param assets      Comma separated list of asset names or Ethereum addresses (max 500)
   * @param blockchains Comma separated list of blockchain names
   * @return Response from the API call
   */
  async fetchMultipleAssetMarketData(
    assets: string,
    blockchains?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Record<string, MarketMetrics>>> {
    const req = this.createRequest('GET', '/market/multi-data');
    const mapped = req.prepareArgs({
      assets: [assets, string()],
      blockchains: [blockchains, optional(string())],
    });
    req.query('assets', mapped.assets);
    req.query('blockchains', mapped.blockchains);
    req.throwOn(
      400,
      ErrorResponseError,
      'Invalid input - too many assets or invalid blockchain name'
    );
    return req.callAsJson(dict(marketMetricsSchema), requestOptions);
  }

  /**
   * @param asset      Asset name or contract address to retrieve trade history for.
   * @param maxResults Maximum number of results to return.
   * @return Response from the API call
   */
  async fetchAssetTradeHistory(
    asset: string,
    maxResults?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TradeHistoryItem[]>> {
    const req = this.createRequest('GET', '/market/trades');
    const mapped = req.prepareArgs({
      asset: [asset, string()],
      maxResults: [maxResults, optional(number())],
    });
    req.query('asset', mapped.asset);
    req.query('maxResults', mapped.maxResults);
    req.throwOn(
      400,
      ErrorResponseError,
      'Bad request (e.g., missing asset parameter)'
    );
    return req.callAsJson(array(tradeHistoryItemSchema), requestOptions);
  }

  /**
   * @param asset Name or contract address of the asset
   * @return Response from the API call
   */
  async fetchAssetMetadata(
    asset?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FetchAssetMetadataResponse>> {
    const req = this.createRequest('GET', '/metadata');
    const mapped = req.prepareArgs({ asset: [asset, optional(string())] });
    req.query('asset', mapped.asset);
    return req.callAsJson(fetchAssetMetadataResponseSchema, requestOptions);
  }

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
  async fetchSwapQuote(
    chain: string,
    fromToken: string,
    toToken: string,
    fromAddress: string,
    amount: bigint,
    slippage: number,
    receiver?: string,
    type?: TypeEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<QuoteResponse1>> {
    const req = this.createRequest('GET', '/quote');
    const mapped = req.prepareArgs({
      chain: [chain, string()],
      fromToken: [fromToken, string()],
      toToken: [toToken, string()],
      fromAddress: [fromAddress, string()],
      amount: [amount, bigint()],
      slippage: [slippage, number()],
      receiver: [receiver, optional(string())],
      type: [type, optional(typeEnumSchema)],
    });
    req.query('chain', mapped.chain);
    req.query('fromToken', mapped.fromToken);
    req.query('toToken', mapped.toToken);
    req.query('fromAddress', mapped.fromAddress);
    req.query('amount', mapped.amount);
    req.query('slippage', mapped.slippage);
    req.query('receiver', mapped.receiver);
    req.query('type', mapped.type);
    return req.callAsJson(quoteResponse1Schema, requestOptions);
  }

  /**
   * @param wallet      The user wallet queried
   * @param from        JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided,
   *                              genesis)
   * @param to          JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end)
   * @param blockchains Blockchains to fetch history from (by default, all) - comma separated, chain ID or
   *                              chain name
   * @return Response from the API call
   */
  async fetchWalletHistoryBalance(
    wallet: string,
    from?: number,
    to?: number,
    blockchains?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletHistoryResponse>> {
    const req = this.createRequest('GET', '/wallet/history');
    const mapped = req.prepareArgs({
      wallet: [wallet, string()],
      from: [from, optional(number())],
      to: [to, optional(number())],
      blockchains: [blockchains, optional(string())],
    });
    req.query('wallet', mapped.wallet);
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    req.query('blockchains', mapped.blockchains);
    return req.callAsJson(walletHistoryResponseSchema, requestOptions);
  }

  /**
   * @param wallet      The user wallet queried
   * @param blockchains Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or
   *                               chain name
   * @param cache       Will use cached data if available
   * @param stale       amount of seconds after which the cache is considered stale (default 5min)
   * @return Response from the API call
   */
  async fetchWalletHoldings(
    wallet: string,
    blockchains?: string,
    cache?: boolean,
    stale?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletPortfolioResponse>> {
    const req = this.createRequest('GET', '/wallet/portfolio');
    const mapped = req.prepareArgs({
      wallet: [wallet, string()],
      blockchains: [blockchains, optional(string())],
      cache: [cache, optional(boolean())],
      stale: [stale, optional(number())],
    });
    req.query('wallet', mapped.wallet);
    req.query('blockchains', mapped.blockchains);
    req.query('cache', mapped.cache);
    req.query('stale', mapped.stale);
    return req.callAsJson(walletPortfolioResponseSchema, requestOptions);
  }

  /**
   * @param wallet      The user wallet queried
   * @param from        ISO Date string OR Timestamp from which you want to start receiving transactions
   * @param to          ISO Date string OR Timestamp until which you want to receive transactions
   * @param asset       The asset you want to target, use the asset's name (empty if you want general
   *                                 transactions)
   * @param blockchains Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or
   *                                 chain name
   * @param limit       Number of transactions to return (100 by default)
   * @param offset      Number of pages to skip (0 by default) - limit * offset = number of transactions
   *                                 to skip
   * @param order       Order in which transactions should be sorted. Use 'asc' for ascending and 'desc'
   *                                 for descending.
   * @return Response from the API call
   */
  async fetchWalletTransactions(
    wallet: string,
    from?: number,
    to?: number,
    asset?: string,
    blockchains?: string,
    limit?: number,
    offset?: number,
    order?: OrderEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WalletTransactionsResponse>> {
    const req = this.createRequest('GET', '/wallet/transactions');
    const mapped = req.prepareArgs({
      wallet: [wallet, string()],
      from: [from, optional(number())],
      to: [to, optional(number())],
      asset: [asset, optional(string())],
      blockchains: [blockchains, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      order: [order, optional(orderEnumSchema)],
    });
    req.query('wallet', mapped.wallet);
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    req.query('asset', mapped.asset);
    req.query('blockchains', mapped.blockchains);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('order', mapped.order);
    return req.callAsJson(walletTransactionsResponseSchema, requestOptions);
  }
}
