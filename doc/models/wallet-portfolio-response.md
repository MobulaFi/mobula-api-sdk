
# Wallet Portfolio Response

## Structure

`WalletPortfolioResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data5 \| undefined`](../../doc/models/data-5.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "total_wallet_balance": 254.3,
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
      },
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
      },
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
      },
      "key1": {
        "normal": 248,
        "internal": 82,
        "token": 204,
        "last_updated": 128
      },
      "key2": {
        "normal": 248,
        "internal": 82,
        "token": 204,
        "last_updated": 128
      }
    }
  }
}
```

