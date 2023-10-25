# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Fetch Crypto Data by Name](../../doc/controllers/api.md#fetch-crypto-data-by-name)
* [Fetch Wallet NF Ts](../../doc/controllers/api.md#fetch-wallet-nf-ts)
* [Fetch All Crypto Details](../../doc/controllers/api.md#fetch-all-crypto-details)
* [Fetch Asset Market Data](../../doc/controllers/api.md#fetch-asset-market-data)
* [Fetch Asset Market History](../../doc/controllers/api.md#fetch-asset-market-history)
* [Fetch Multiple Asset Market Data](../../doc/controllers/api.md#fetch-multiple-asset-market-data)
* [Fetch Asset Trade History](../../doc/controllers/api.md#fetch-asset-trade-history)
* [Fetch Asset Metadata](../../doc/controllers/api.md#fetch-asset-metadata)
* [Fetch Swap Quote](../../doc/controllers/api.md#fetch-swap-quote)
* [Fetch Wallet History Balance](../../doc/controllers/api.md#fetch-wallet-history-balance)
* [Fetch Wallet Holdings](../../doc/controllers/api.md#fetch-wallet-holdings)
* [Fetch Wallet Transactions](../../doc/controllers/api.md#fetch-wallet-transactions)


# Fetch Crypto Data by Name

```ts
async fetchCryptoDataByName(
  name?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Query, Optional | Name or symbol (or starting name/symbol) of the asset |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchResponse`](../../doc/models/search-response.md)

## Example Usage

```ts
const name = 'bitcoin';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchCryptoDataByName(name);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Wallet NF Ts

```ts
async fetchWalletNFTs(
  wallet?: string,
  force?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletNftsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string \| undefined` | Query, Optional | Wallet address or ENS or Mobula username |
| `force` | `boolean \| undefined` | Query, Optional | Will force a new on-chain data fetch |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletNftsResponse1`](../../doc/models/wallet-nfts-response-1.md)

## Example Usage

```ts
const wallet = '0x554efD74C693999bABf7CC0f5646D465A31b32CB';

const force = true;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletNFTs(
  wallet,
  force
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch All Crypto Details

```ts
async fetchAllCryptoDetails(
  fields?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fields` | `string \| undefined` | Query, Optional | Extra fields needed |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AllResponse`](../../doc/models/all-response.md)

## Example Usage

```ts
const fields = 'blockchains,contracts';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAllCryptoDetails(fields);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Asset Market Data

```ts
async fetchAssetMarketData(
  asset: string,
  blockchain?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MarketDataResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string` | Query, Required | The asset you want to target - asset name only works for assets listed on Mobula. |
| `blockchain` | `string \| undefined` | Query, Optional | Blockchain of the asset - only mandatory if asset is sent as smart-contract. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MarketDataResponse1`](../../doc/models/market-data-response-1.md)

## Example Usage

```ts
const asset = 'Bitcoin';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAssetMarketData(asset);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Asset Market History

```ts
async fetchAssetMarketHistory(
  asset: string,
  blockchain?: string,
  from?: number,
  to?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MarketHistoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string` | Query, Required | The asset you want to target - asset name only works for assets listed on Mobula. |
| `blockchain` | `string \| undefined` | Query, Optional | Blockchain of the asset - only mandatory if asset is sent as smart-contract. |
| `from` | `number \| undefined` | Query, Optional | JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis) |
| `to` | `number \| undefined` | Query, Optional | JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MarketHistoryResponse`](../../doc/models/market-history-response.md)

## Example Usage

```ts
const asset = 'asset0';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAssetMarketHistory(asset);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Multiple Asset Market Data

```ts
async fetchMultipleAssetMarketData(
  assets: string,
  blockchains?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Record<string, MarketMetrics>>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assets` | `string` | Query, Required | Comma separated list of asset names or Ethereum addresses (max 50) |
| `blockchains` | `string \| undefined` | Query, Optional | Comma separated list of blockchain names |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Record<string, MarketMetrics>`](../../doc/models/market-metrics.md)

## Example Usage

```ts
const assets = 'assets8';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchMultipleAssetMarketData(assets);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid input - too many assets or invalid blockchain name | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Fetch Asset Trade History

```ts
async fetchAssetTradeHistory(
  asset: string,
  maxResults?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TradeHistoryItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string` | Query, Required | Asset name or contract address to retrieve trade history for. |
| `maxResults` | `number \| undefined` | Query, Optional | Maximum number of results to return.<br>**Default**: `20` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TradeHistoryItem[]`](../../doc/models/trade-history-item.md)

## Example Usage

```ts
const asset = 'asset0';

const maxResults = 20;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAssetTradeHistory(
  asset,
  maxResults
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request (e.g., missing asset parameter) | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Fetch Asset Metadata

```ts
async fetchAssetMetadata(
  asset?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Asset[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string \| undefined` | Query, Optional | Name or contract address of the asset |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Asset[]`](../../doc/models/asset.md)

## Example Usage

```ts
const asset = 'Bitcoin';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAssetMetadata(asset);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Swap Quote

```ts
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
): Promise<ApiResponse<QuoteResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chain` | `string` | Query, Required | Blockchain of the trade |
| `fromToken` | `string` | Query, Required | Source token for the swap |
| `toToken` | `string` | Query, Required | Destination token for the swap |
| `fromAddress` | `string` | Query, Required | Address that triggers the trade |
| `amount` | `bigint` | Query, Required | Amount (x decimals) for the swap in |
| `slippage` | `number` | Query, Required | Slippage (%) accepted |
| `receiver` | `string \| undefined` | Query, Optional | Address that receives the trade (by default, the sender) |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Query, Optional | Aggregation type (fast or best)<br>**Default**: `TypeEnum.Best` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`QuoteResponse1`](../../doc/models/quote-response-1.md)

## Example Usage

```ts
const chain = 'Ethereum';

const fromToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

const toToken = '0xc944e90c64b2c07662a292be6244bdf05cda44a7';

const fromAddress = '0xbb663a119193cA68512c351b0fdfDEB9c22Dc416';

const amount = BigInt(39020329732097);

const slippage = 0.5;

const receiver = '0xbb663a119193cA68512c351b0fdfDEB9c22Dc416';

const type = TypeEnum.Best;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchSwapQuote(
  chain,
  fromToken,
  toToken,
  fromAddress,
  amount,
  slippage,
  receiver,
  type
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Wallet History Balance

```ts
async fetchWalletHistoryBalance(
  wallet: string,
  from?: number,
  to?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletHistoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string` | Query, Required | The user wallet queried |
| `from` | `number \| undefined` | Query, Optional | JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis) |
| `to` | `number \| undefined` | Query, Optional | JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletHistoryResponse`](../../doc/models/wallet-history-response.md)

## Example Usage

```ts
const wallet = '0xE7dBE6aa7Edcc38CB5007B87153d236AD879309B';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletHistoryBalance(wallet);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Wallet Holdings

```ts
async fetchWalletHoldings(
  wallet: string,
  timestamp?: number,
  asset?: string,
  blockchain?: string,
  tokens?: boolean,
  nfts?: boolean,
  coins?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletPortfolioResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string` | Query, Required | The user wallet queried |
| `timestamp` | `number \| undefined` | Query, Optional | ISO Date string from which you want to start receiving transactions - NOW by default |
| `asset` | `string \| undefined` | Query, Optional | The asset you want to target (empty if you want general portfolio) |
| `blockchain` | `string \| undefined` | Query, Optional | The blockchain you want to target (empty if you want general transactions) |
| `tokens` | `boolean \| undefined` | Query, Optional | true if tokens included (true by default) |
| `nfts` | `boolean \| undefined` | Query, Optional | true if nfts included (false by default) |
| `coins` | `boolean \| undefined` | Query, Optional | true if coins included (true by default) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletPortfolioResponse`](../../doc/models/wallet-portfolio-response.md)

## Example Usage

```ts
const wallet = '0xE7dBE6aa7Edcc38CB5007B87153d236AD879309B';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletHoldings(wallet);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Wallet Transactions

```ts
async fetchWalletTransactions(
  wallet: string,
  from?: number,
  to?: number,
  asset?: string,
  blockchain?: string,
  trades?: boolean,
  transactions?: boolean,
  limit?: number,
  offset?: number,
  order?: OrderEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string` | Query, Required | The user wallet queried |
| `from` | `number \| undefined` | Query, Optional | ISO Date string OR Timestamp from which you want to start receiving transactions |
| `to` | `number \| undefined` | Query, Optional | ISO Date string OR Timestamp until which you want to receive transactions |
| `asset` | `string \| undefined` | Query, Optional | The asset you want to target, use the asset's name (empty if you want general transactions) |
| `blockchain` | `string \| undefined` | Query, Optional | The blockchain you want to target (empty if you want general transactions) |
| `trades` | `boolean \| undefined` | Query, Optional | true if trades included (true by default) |
| `transactions` | `boolean \| undefined` | Query, Optional | true if non-trades transactions included (true by default) |
| `limit` | `number \| undefined` | Query, Optional | Number of transactions to return (100 by default)<br>**Default**: `100` |
| `offset` | `number \| undefined` | Query, Optional | Number of pages to skip (0 by default) - limit * offset = number of transactions to skip<br>**Default**: `0` |
| `order` | [`OrderEnum \| undefined`](../../doc/models/order-enum.md) | Query, Optional | Order in which transactions should be sorted. Use 'asc' for ascending and 'desc' for descending.<br>**Default**: `OrderEnum.Asc` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletTransactionsResponse`](../../doc/models/wallet-transactions-response.md)

## Example Usage

```ts
const wallet = '0xE7dBE6aa7Edcc38CB5007B87153d236AD879309B';

const limit = 100;

const offset = 0;

const order = OrderEnum.Asc;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletTransactions(
  wallet,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  limit,
  offset,
  order
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

