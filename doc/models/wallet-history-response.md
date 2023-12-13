
# Wallet History Response

## Structure

`WalletHistoryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data4 \| undefined`](../../doc/models/data-4.md) | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "wallet": [
      "wallet4",
      "wallet5"
    ],
    "balance_usd": 96.62,
    "balance_history": [
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key1": "val1",
        "key2": "val2"
      }
    ]
  }
}
```

