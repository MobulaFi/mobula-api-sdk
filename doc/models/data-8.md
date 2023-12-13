
# Data 8

## Structure

`Data8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalWalletBalance` | `number \| undefined` | Optional | Total balance of the wallet in USD. |
| `wallet` | `string \| undefined` | Optional | Wallet address queried. |
| `assets` | [`Asset5[] \| undefined`](../../doc/models/asset-5.md) | Optional | - |

## Example (as JSON)

```json
{
  "total_wallet_balance": 35.54,
  "wallet": "wallet2",
  "assets": [
    {
      "asset": {
        "data": {
          "id": 138,
          "name": "name0",
          "symbol": "symbol2",
          "contracts": [
            "contracts3",
            "contracts2",
            "contracts1"
          ],
          "blockchains": [
            "blockchains9",
            "blockchains0"
          ]
        }
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
  ]
}
```

