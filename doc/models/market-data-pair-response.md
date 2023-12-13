
# Market Data Pair Response

## Structure

`MarketDataPairResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data1 \| undefined`](../../doc/models/data-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "pairs": [
      {
        "address": "address4",
        "token0": {
          "address": "address6",
          "decimals": 154,
          "symbol": "symbol2",
          "name": "name0",
          "logo": "logo6"
        },
        "token1": {
          "address": "address4",
          "decimals": 6,
          "symbol": "symbol0",
          "name": "name8",
          "logo": "logo4"
        },
        "liquidity": 147.56,
        "volume": 88.34
      }
    ]
  }
}
```

