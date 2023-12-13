
# Data 9

## Structure

`Data9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactions` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | - |
| `total` | `number \| undefined` | Optional | Total number of transactions. |
| `offset` | `number \| undefined` | Optional | Offset value for pagination. |
| `limit` | `number \| undefined` | Optional | Limit value for pagination. |
| `page` | `number \| undefined` | Optional | Current page number. |
| `lastUpdated` | [`Record<string, LastUpdated2> \| undefined`](../../doc/models/last-updated-2.md) | Optional | - |

## Example (as JSON)

```json
{
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
    }
  ],
  "total": 242,
  "offset": 16,
  "limit": 80,
  "page": 23.38
}
```

