import { SupabaseClient } from '@supabase/supabase-js';
import { Client } from './client';
import { ApiController } from './controllers/apiController';
import { ApiResponse, RequestOptions } from './core';
import { PostgREST } from './db';
import { MarketPairsResponse } from './models/marketPairsResponse';
import { OrderEnum } from './models/orderEnum';
import { TypeEnum } from './models/typeEnum';

class Mobula {
  private apiController: ApiController;
  public db: SupabaseClient;

  constructor(apiKey: string) {
    const client = new Client({
      apiKey: apiKey,
      timeout: 0,
    });
    this.apiController = new ApiController(client);
    this.db = new PostgREST(
      'https://postgrest-readonly-fgpupeioaa-uc.a.run.app',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidW5hdXRoZW50aWZpZWQifQ.Fwr7hObDoGDsWDgmfMX8-xVqHoP-4f_DrAR3apJKIrw'
    );
  }

  public async searchCryptoByName(options: {
    name?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.searchCryptoByName(
      options.name,
      options.requestOptions
    );
  }

  public async fetchWalletTransactions(options: {
    wallet: string;
    from?: number;
    to?: number;
    asset?: string;
    blockchains?: string;
    limit?: number;
    offset?: number;
    order?: OrderEnum;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletTransactions(
      options.wallet,
      options.from,
      options.to,
      options.asset,
      options.blockchains,
      options.limit,
      options.offset,
      options.order,
      options.requestOptions
    );
  }

  public async fetchWalletNFTs(options: {
    wallet?: string;
    force?: boolean;
    blockchains?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletNFTs(
      options.wallet,
      options.force,
      options.blockchains
    );
  }

  public async fetchAllCryptoDetails(options: {
    fields?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAllCryptoDetails(
      options.fields,
      options.requestOptions
    );
  }

  public async fetchAssetMarketData(options: {
    asset?: string;
    blockchain?: string;
    symbol?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAssetMarketData(
      options.asset,
      options.blockchain,
      options.symbol,
      options.requestOptions
    );
  }

  public async fetchPairMarketData(options: {
    address: string;
    blockchain?: string;
    asset?: unknown;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchPairMarketData(
      options.address,
      options.blockchain,
      options.asset,
      options.requestOptions
    );
  }

  public async fetchPairsMarketData(options: {
    asset: string;
    blockchain?: string;
    offset?: number;
    requestOptions?: RequestOptions;
  }): Promise<ApiResponse<MarketPairsResponse>> {
    return await this.apiController.fetchPairsMarketData(
      options.asset,
      options.blockchain,
      options.offset,
      options.requestOptions
    );
  }

  public async fetchAssetMarketHistory(options: {
    asset: string;
    blockchain?: string;
    from?: number;
    to?: number;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAssetMarketHistory(
      options.asset,
      options.blockchain,
      options.from,
      options.to,
      options.requestOptions
    );
  }

  public async fetchAssetMetadata(options: {
    asset: string;
    blockchain?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAssetMetadata(
      options.asset,
      options.blockchain,
      options.requestOptions
    );
  }

  public async fetchAssetTradeHistory(options: {
    asset: string;
    maxResults?: number;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAssetTradeHistory(
      options.asset,
      options.maxResults,
      options.requestOptions
    );
  }

  public async fetchMultipleAssetMarketData(options: {
    assets?: string;
    blockchains?: string;
    symbols?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchMultipleAssetMarketData(
      options.assets,
      options.blockchains,
      options.symbols,
      options.requestOptions
    );
  }

  public async fetchSwapQuote(options: {
    chain: string;
    fromToken: string;
    toToken: string;
    fromAddress: string;
    amount: bigint;
    slippage: number;
    receiver?: string;
    type?: TypeEnum;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchSwapQuote(
      options.chain,
      options.fromToken,
      options.toToken,
      options.fromAddress,
      options.amount,
      options.slippage,
      options.receiver,
      options.type,
      options.requestOptions
    );
  }

  public async fetchWalletHistoryBalance(options: {
    wallet: string;
    from?: number;
    to?: number;
    blockchains?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletHistoryBalance(
      options.wallet,
      options.from,
      options.to,
      options.blockchains
    );
  }

  public async fetchWalletHoldings(options: {
    wallet: string;
    blockchains?: string;
    cache?: boolean;
    stale?: number;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletHoldings(
      options.wallet,
      options.blockchains,
      options.cache,
      options.stale,
      options.requestOptions
    );
  }
}

// Corrected the export statement
export { Mobula };
