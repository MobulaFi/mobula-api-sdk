
# Data 5

## Structure

`Data5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalWalletBalance` | `number \| undefined` | Optional | - |
| `wallet` | `string \| undefined` | Optional | - |
| `assets` | [`Asset3[] \| undefined`](../../doc/models/asset-3.md) | Optional | - |
| `lastUpdated` | [`Record<string, LastUpdated> \| undefined`](../../doc/models/last-updated.md) | Optional | - |

## Example (as JSON)

```json
{
  "total_wallet_balance": 121.2,
  "wallet": "wallet6",
  "assets": [
    {
      "asset": {
        "name": "name0",
        "symbol": "symbol2",
        "id": 240,
        "contracts": [
          "contracts3"
        ],
        "logo": "logo6"
      },
      "price": 111.24,
      "estimated_balance": 143.92,
      "token_balance": 239.34,
      "cross_chain_balances": {
        "key0": {
          "address": "address6",
          "balance": 55.84,
          "balanceRaw": "balanceRaw8",
          "chainId": 182
        }
      }
    }
  ],
  "lastUpdated": {
    "key0": {
      "normal": 248,
      "internal": 82,
      "token": 204,
      "last_updated": 128
    }
  }
}
```

