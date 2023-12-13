
# Wallet Transactions Response

## Structure

`WalletTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data9 \| undefined`](../../doc/models/data-9.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "transactions": [
      {
        "timestamp": 48,
        "asset": {
          "name": "name0",
          "symbol": "symbol2",
          "id": 240,
          "contract": "contract0",
          "logo": "logo6"
        },
        "type": "type2",
        "method_id": "method_id2",
        "hash": "hash4"
      },
      {
        "timestamp": 48,
        "asset": {
          "name": "name0",
          "symbol": "symbol2",
          "id": 240,
          "contract": "contract0",
          "logo": "logo6"
        },
        "type": "type2",
        "method_id": "method_id2",
        "hash": "hash4"
      },
      {
        "timestamp": 48,
        "asset": {
          "name": "name0",
          "symbol": "symbol2",
          "id": 240,
          "contract": "contract0",
          "logo": "logo6"
        },
        "type": "type2",
        "method_id": "method_id2",
        "hash": "hash4"
      }
    ],
    "total": 16,
    "offset": 242,
    "limit": 110,
    "page": 10.28
  }
}
```

