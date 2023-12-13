# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Search Crypto by Name](../../doc/controllers/api.md#search-crypto-by-name)
* [Fetch Wallet NF Ts](../../doc/controllers/api.md#fetch-wallet-nf-ts)
* [Fetch All Crypto Details](../../doc/controllers/api.md#fetch-all-crypto-details)
* [Fetch Asset Market Data](../../doc/controllers/api.md#fetch-asset-market-data)
* [Fetch Pair Market Data](../../doc/controllers/api.md#fetch-pair-market-data)
* [Fetch Pairs Market Data](../../doc/controllers/api.md#fetch-pairs-market-data)
* [Fetch Asset Market History](../../doc/controllers/api.md#fetch-asset-market-history)
* [Fetch Multiple Asset Market Data](../../doc/controllers/api.md#fetch-multiple-asset-market-data)
* [Fetch Asset Trade History](../../doc/controllers/api.md#fetch-asset-trade-history)
* [Fetch Asset Metadata](../../doc/controllers/api.md#fetch-asset-metadata)
* [Fetch Swap Quote](../../doc/controllers/api.md#fetch-swap-quote)
* [Fetch Wallet History Balance](../../doc/controllers/api.md#fetch-wallet-history-balance)
* [Fetch Wallet Holdings](../../doc/controllers/api.md#fetch-wallet-holdings)
* [Fetch Wallet Transactions](../../doc/controllers/api.md#fetch-wallet-transactions)


# Search Crypto by Name

```ts
async searchCryptoByName(
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
  const { result, ...httpResponse } = await apiController.searchCryptoByName(name);
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
  blockchains?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletNftsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string \| undefined` | Query, Optional | Wallet address or ENS or Mobula username |
| `force` | `boolean \| undefined` | Query, Optional | Will force a new on-chain data fetch |
| `blockchains` | `string \| undefined` | Query, Optional | Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or chain name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletNftsResponse1`](../../doc/models/wallet-nfts-response-1.md)

## Example Usage

```ts
const wallet = '0x554efD74C693999bABf7CC0f5646D465A31b32CB';

const force = true;

const blockchains = '56,Ethereum';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletNFTs(
  wallet,
  force,
  blockchains
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
  asset?: string,
  blockchain?: string,
  symbol?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MarketDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string \| undefined` | Query, Optional | The asset you want to target - asset name only works for assets listed on Mobula. |
| `blockchain` | `string \| undefined` | Query, Optional | Blockchain of the asset - only mandatory if asset is sent as smart-contract. |
| `symbol` | `string \| undefined` | Query, Optional | Symbol of the asset - only mandatory if no asset name/contract is provided |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MarketDataResponse`](../../doc/models/market-data-response.md)

## Example Usage

```ts
const asset = 'Bitcoin';

const symbol = 'BTC';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAssetMarketData(
  asset,
  undefined,
  symbol
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


# Fetch Pair Market Data

```ts
async fetchPairMarketData(
  address: string,
  blockchain?: string,
  asset?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MarketPairResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Query, Required | The address of the smart-contract of the pair (or pool, or vault). |
| `blockchain` | `string \| undefined` | Query, Optional | Blockchain of the pair (only mandatory for Balancer V2 pairs). |
| `asset` | `unknown \| undefined` | Query, Optional | The name/address of the asset you want in return |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MarketPairResponse`](../../doc/models/market-pair-response.md)

## Example Usage

```ts
const address = 'address6';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchPairMarketData(address);
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


# Fetch Pairs Market Data

```ts
async fetchPairsMarketData(
  asset: string,
  blockchain?: string,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MarketPairsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string` | Query, Required | The asset you want to target - asset name only works for assets listed on Mobula. |
| `blockchain` | `string \| undefined` | Query, Optional | Blockchain of the asset - only mandatory if asset is sent as smart-contract. |
| `offset` | `number \| undefined` | Query, Optional | The offset of the results |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MarketPairsResponse`](../../doc/models/market-pairs-response.md)

## Example Usage

```ts
const asset = 'Bitcoin';

const offset = 0;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchPairsMarketData(
  asset,
  undefined,
  offset
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
| `from` | `number \| undefined` | Query, Optional | JS Timestamp (milliseconds) of the beginning of the timeframe (if not provided, genesis) |
| `to` | `number \| undefined` | Query, Optional | JS Timestamp (milliseconds) of the end of the timeframe (if not provided, end) |
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
  assets?: string,
  blockchains?: string,
  symbols?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MultiDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assets` | `string \| undefined` | Query, Optional | Comma separated list of asset names or Ethereum addresses (max 500) |
| `blockchains` | `string \| undefined` | Query, Optional | Comma separated list of blockchain names |
| `symbols` | `string \| undefined` | Query, Optional | Comma separated list of symbols |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MultiDataResponse`](../../doc/models/multi-data-response.md)

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchMultipleAssetMarketData();
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
| 400 | Bad request response. | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Fetch Asset Trade History

```ts
async fetchAssetTradeHistory(
  asset: string,
  maxResults?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TradeHistoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string` | Query, Required | Asset name or contract address to retrieve trade history for. |
| `maxResults` | `number \| undefined` | Query, Optional | Maximum number of results to return.<br>**Default**: `20` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TradeHistoryResponse`](../../doc/models/trade-history-response.md)

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
  asset: string,
  blockchain?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Asset>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | `string` | Query, Required | Name or contract address of the asset |
| `blockchain` | `string \| undefined` | Query, Optional | Blockchain of the asset |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Asset`](../../doc/models/asset.md)

## Example Usage

```ts
const asset = 'Bitcoin';

const blockchain = 'Ethereum';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchAssetMetadata(
  asset,
  blockchain
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
  blockchains?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletHistoryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string` | Query, Required | The user wallet queried |
| `from` | `number \| undefined` | Query, Optional | JS Timestamp (miliseconds) of the beginning of the timeframe (if not provided, genesis) |
| `to` | `number \| undefined` | Query, Optional | JS Timestamp (miliseconds) of the end of the timeframe (if not provided, end) |
| `blockchains` | `string \| undefined` | Query, Optional | Blockchains to fetch history from (by default, all) - comma separated, chain ID or chain name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletHistoryResponse`](../../doc/models/wallet-history-response.md)

## Example Usage

```ts
const wallet = '0xf23b38099188fd5892346104bBEF2F1c11D10244';

const blockchains = '56,Ethereum';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletHistoryBalance(
  wallet,
  undefined,
  undefined,
  blockchains
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


# Fetch Wallet Holdings

Get the portfolio of holdings from any EVM-compatible wallets, at any time

```ts
async fetchWalletHoldings(
  wallet: string,
  blockchains?: string,
  cache?: boolean,
  stale?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WalletPortfolioResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string` | Query, Required | The user wallet queried |
| `blockchains` | `string \| undefined` | Query, Optional | Blockchains to fetch holdings from (by default, all) - comma separated, chain ID or chain name |
| `cache` | `boolean \| undefined` | Query, Optional | Will use cached data if available |
| `stale` | `number \| undefined` | Query, Optional | Amount of seconds after which the cache is considered stale (default 5min) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletPortfolioResponse1`](../../doc/models/wallet-portfolio-response-1.md)

## Example Usage

```ts
const wallet = '0xf23b38099188fd5892346104bBEF2F1c11D10244';

const blockchains = '56,Ethereum';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletHoldings(
  wallet,
  blockchains
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


# Fetch Wallet Transactions

Retrieve all transactions for a specified wallet within a given timeframe.

```ts
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
): Promise<ApiResponse<WalletTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string` | Query, Required | The user wallet queried |
| `from` | `number \| undefined` | Query, Optional | Start of the timeframe for transactions (timestamp) |
| `to` | `number \| undefined` | Query, Optional | End of the timeframe for transactions (timestamp) |
| `asset` | `string \| undefined` | Query, Optional | Specific asset to filter transactions |
| `blockchains` | `string \| undefined` | Query, Optional | Blockchains to fetch NFTs from (by default, all) - comma separated, chain ID or chain name |
| `limit` | `number \| undefined` | Query, Optional | Number of transactions to return per page<br>**Default**: `50` |
| `offset` | `number \| undefined` | Query, Optional | Number of transactions to skip<br>**Default**: `10` |
| `order` | [`OrderEnum \| undefined`](../../doc/models/order-enum.md) | Query, Optional | **Default**: `OrderEnum.Asc` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WalletTransactionsResponse`](../../doc/models/wallet-transactions-response.md)

## Example Usage

```ts
const wallet = '0xd99cB89A20822B0448936DF4f36803778CA5a003';

const blockchains = '56,Ethereum';

const limit = 50;

const offset = 10;

const order = OrderEnum.Asc;

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await apiController.fetchWalletTransactions(
  wallet,
  undefined,
  undefined,
  undefined,
  blockchains,
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

