import { Client } from './client';
import { ApiController } from './controllers/apiController';
import { RequestOptions } from './core';
import { OrderEnum } from './models/orderEnum';
import { TypeEnum } from './models/typeEnum';

class Mobula {
  private apiController: ApiController;

  constructor(apiKey: string) {
    const client = new Client({
      apiKey: apiKey,
      timeout: 0,
    });
    this.apiController = new ApiController(client);
  }

  public async fetchCryptoDataByName(options: {
    name?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchCryptoDataByName(
      options.name,
      options.requestOptions
    );
  }

  public async fetchWalletNFTs(options: {
    wallet?: string;
    force?: boolean;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletNFTs(
      options.wallet,
      options.force,
      options.requestOptions
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
    asset: string;
    blockchain?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAssetMarketData(
      options.asset,
      options.blockchain,
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
    asset?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchAssetMetadata(
      options.asset,
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
    assets: string;
    blockchains?: string;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchMultipleAssetMarketData(
      options.assets,
      options.blockchains,
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
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletHistoryBalance(
      options.wallet,
      options.from,
      options.to,
      options.requestOptions
    );
  }

  public async fetchWalletHoldings(options: {
    wallet: string;
    timestamp?: number;
    asset?: string;
    blockchain?: string;
    tokens?: boolean;
    nfts?: boolean;
    coins?: boolean;
    requestOptions?: RequestOptions;
  }) {
    return await this.apiController.fetchWalletHoldings(
      options.wallet,
      options.timestamp,
      options.asset,
      options.blockchain,
      options.tokens,
      options.nfts,
      options.coins,
      options.requestOptions
    );
  }

  public async fetchWalletTransactions(options: {
    wallet: string;
    from?: number;
    to?: number;
    asset?: string;
    blockchain?: string;
    trades?: boolean;
    transactions?: boolean;
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
      options.blockchain,
      options.trades,
      options.transactions,
      options.limit,
      options.offset,
      options.order,
      options.requestOptions
    );
  }
}

// Corrected the export statement
export { Mobula };
