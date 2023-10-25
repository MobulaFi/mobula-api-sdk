
# Wallet Transactions Response

## Structure

`WalletTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactions` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | - |

## Example (as JSON)

```json
{
  "transactions": [
    {
      "amount": 157.0,
      "asset": {
        "id": 240,
        "name": "name0",
        "symbol": "symbol2"
      },
      "from": "from4",
      "timestamp": 48,
      "to": "to2"
    },
    {
      "amount": 157.0,
      "asset": {
        "id": 240,
        "name": "name0",
        "symbol": "symbol2"
      },
      "from": "from4",
      "timestamp": 48,
      "to": "to2"
    }
  ]
}
```

