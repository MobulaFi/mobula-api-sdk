import { ApiController, Client } from '../src';
import { RequestOptions } from '../src/core';
import { OrderEnum } from '../src/models/orderEnum';
import { TypeEnum } from '../src/models/typeEnum';

const client = new Client({
  timeout: 0,
});

const apiController = new ApiController(client);

// Wrapper for fetchCryptoDataByName
async function fetchCryptoDataByName(options: {
  name?: string;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchCryptoDataByName(
    options.name,
    options.requestOptions
  );
}

// Wrapper for fetchWalletNFTs
async function fetchWalletNFTs(options: {
  wallet?: string;
  force?: boolean;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchWalletNFTs(
    options.wallet,
    options.force,
    options.requestOptions
  );
}

// Wrapper for fetchAllCryptoDetails
async function fetchAllCryptoDetails(options: {
  fields?: string;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchAllCryptoDetails(
    options.fields,
    options.requestOptions
  );
}

// Wrapper for fetchAssetMarketData
async function fetchAssetMarketData(options: {
  asset: string;
  blockchain?: string;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchAssetMarketData(
    options.asset,
    options.blockchain,
    options.requestOptions
  );
}

// Wrapper for fetchAssetMarketHistory
async function fetchAssetMarketHistory(options: {
  asset: string;
  blockchain?: string;
  from?: number;
  to?: number;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchAssetMarketHistory(
    options.asset,
    options.blockchain,
    options.from,
    options.to,
    options.requestOptions
  );
}

// Wrapper for fetchMultipleAssetMarketData
async function fetchMultipleAssetMarketData(options: {
  assets: string;
  blockchains?: string;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchMultipleAssetMarketData(
    options.assets,
    options.blockchains,
    options.requestOptions
  );
}

// Wrapper for fetchAssetTradeHistory
async function fetchAssetTradeHistory(options: {
  asset: string;
  maxResults?: number;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchAssetTradeHistory(
    options.asset,
    options.maxResults,
    options.requestOptions
  );
}

// Wrapper for fetchAssetMetadata
async function fetchAssetMetadata(options: {
  asset?: string;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchAssetMetadata(
    options.asset,
    options.requestOptions
  );
}

// Wrapper for fetchSwapQuote
async function fetchSwapQuote(options: {
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
  return await apiController.fetchSwapQuote(
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

// Wrapper for fetchWalletHistoryBalance
async function fetchWalletHistoryBalance(options: {
  wallet: string;
  from?: number;
  to?: number;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchWalletHistoryBalance(
    options.wallet,
    options.from,
    options.to,
    options.requestOptions
  );
}

// Wrapper for fetchWalletHoldings
async function fetchWalletHoldings(options: {
  wallet: string;
  timestamp?: number;
  asset?: string;
  blockchain?: string;
  tokens?: boolean;
  nfts?: boolean;
  coins?: boolean;
  requestOptions?: RequestOptions;
}) {
  return await apiController.fetchWalletHoldings(
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

// Wrapper for fetchWalletTransactions
async function fetchWalletTransactions(options: {
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
  return await apiController.fetchWalletTransactions(
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

export {
  fetchAllCryptoDetails,
  fetchAssetMarketData,
  fetchAssetMarketHistory,
  fetchAssetMetadata,
  fetchAssetTradeHistory,
  fetchCryptoDataByName,
  fetchMultipleAssetMarketData,
  fetchSwapQuote,
  fetchWalletHistoryBalance,
  fetchWalletHoldings,
  fetchWalletNFTs,
  fetchWalletTransactions,
};
