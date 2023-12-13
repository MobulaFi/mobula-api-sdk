
# Search Crypto Data

## Structure

`SearchCryptoData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blockchains` | `string[] \| undefined` | Optional | - |
| `contracts` | `(string \| null)[] \| undefined` | Optional | - |
| `id` | `number \| undefined` | Optional | - |
| `liquidity` | `bigint \| undefined` | Optional | - |
| `logo` | `string \| undefined` | Optional | - |
| `marketCap` | `bigint \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `price` | `number \| undefined` | Optional | - |
| `symbol` | `string \| undefined` | Optional | - |
| `twitter` | `string \| null \| undefined` | Optional | - |
| `volume` | `bigint \| undefined` | Optional | - |
| `website` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "blockchains": [
    "Ethereum"
  ],
  "contracts": [
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "contracts2"
  ],
  "id": 100001656,
  "liquidity": 626115369,
  "logo": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  "market_cap": 513425544929,
  "name": "Bitcoin",
  "price": 26470.3509662373,
  "symbol": "BTC",
  "twitter": "https://twitter.com/bitcoin",
  "volume": 42592947,
  "website": "http://www.bitcoin.org"
}
```

