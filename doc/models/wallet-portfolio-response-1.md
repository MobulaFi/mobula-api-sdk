
# Wallet Portfolio Response 1

## Structure

`WalletPortfolioResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data8 \| undefined`](../../doc/models/data-8.md) | Optional | - |
| `lastUpdated` | [`Record<string, LastUpdated1> \| undefined`](../../doc/models/last-updated-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "total_wallet_balance": 254.3,
    "wallet": "wallet6",
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
      },
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
      },
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
  },
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
```

