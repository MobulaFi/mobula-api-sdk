
# Asset 4

## Structure

`Asset4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allocation` | `number \| undefined` | Optional | The share of the user’s portfolio dedicated to this asset. |
| `asset` | [`Asset1 \| undefined`](../../doc/models/asset-1.md) | Optional | - |
| `balance` | `number \| undefined` | Optional | The balance of the asset. |
| `estimatedBalance` | `number \| undefined` | Optional | The USD balance of the asset held by the user. |
| `price` | `number \| undefined` | Optional | The current price of the asset. |
| `priceBought` | `number \| undefined` | Optional | The average bought price of the asset by the user. |
| `roi` | `number \| undefined` | Optional | The ROI of the asset. |

## Example (as JSON)

```json
{
  "allocation": 210.4,
  "asset": {
    "id": 240,
    "name": "name0",
    "symbol": "symbol2"
  },
  "balance": 156.86,
  "estimated_balance": 178.26,
  "price": 76.9
}
```

