
# Market Metrics

## Structure

`MarketMetrics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `marketCap` | `number \| undefined` | Optional | The market capitalization of the cryptocurrency. |
| `marketCapDiluted` | `number \| undefined` | Optional | The diluted market capitalization of the cryptocurrency. |
| `liquidity` | `number \| undefined` | Optional | The liquidity of the cryptocurrency. |
| `liquidityChange24h` | `number \| undefined` | Optional | The 24-hour change in liquidity. |
| `price` | `number \| undefined` | Optional | The current price of the cryptocurrency. |
| `offChainVolume` | `number \| undefined` | Optional | The off-chain trading volume. |
| `volume` | `number \| undefined` | Optional | The trading volume of the cryptocurrency. |
| `volumeChange24h` | `number \| undefined` | Optional | The 24-hour change in trading volume. |
| `volume7d` | `number \| undefined` | Optional | The 7-day trading volume. |
| `isListed` | `boolean \| undefined` | Optional | Indicates whether the cryptocurrency is listed or not. |
| `priceChange24h` | `number \| undefined` | Optional | The 24-hour price change. |
| `priceChange1h` | `number \| undefined` | Optional | The 1-hour price change. |
| `priceChange7d` | `number \| undefined` | Optional | The 7-day price change. |
| `priceChange1m` | `number \| undefined` | Optional | The 1-month price change. |
| `priceChange1y` | `number \| undefined` | Optional | The 1-year price change. |
| `ath` | `number \| undefined` | Optional | The all-time high price. |
| `atl` | `number \| undefined` | Optional | The all-time low price. |

## Example (as JSON)

```json
{
  "market_cap": 7.78,
  "market_cap_diluted": 191.92,
  "liquidity": 34.76,
  "liquidity_change_24h": 40.06,
  "price": 27.84
}
```

