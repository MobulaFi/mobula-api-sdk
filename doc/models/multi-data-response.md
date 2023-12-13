
# Multi Data Response

## Structure

`MultiDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Record<string, MarketMetrics> \| undefined`](../../doc/models/market-metrics.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "key0": {
      "market_cap": 184.2,
      "market_cap_diluted": 112.34,
      "liquidity": 211.18,
      "liquidity_change_24h": 216.48,
      "price": 148.58
    },
    "key1": {
      "market_cap": 184.2,
      "market_cap_diluted": 112.34,
      "liquidity": 211.18,
      "liquidity_change_24h": 216.48,
      "price": 148.58
    },
    "key2": {
      "market_cap": 184.2,
      "market_cap_diluted": 112.34,
      "liquidity": 211.18,
      "liquidity_change_24h": 216.48,
      "price": 148.58
    }
  }
}
```

