
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | The amount of asset in the transaction. |
| `asset` | [`Asset1 \| undefined`](../../doc/models/asset-1.md) | Optional | - |
| `from` | `string \| undefined` | Optional | The sender's address. |
| `timestamp` | `number \| undefined` | Optional | The timestamp of the transaction. |
| `to` | `string \| undefined` | Optional | The receiver's address. |

## Example (as JSON)

```json
{
  "amount": 20.56,
  "asset": {
    "id": 240,
    "name": "name0",
    "symbol": "symbol2"
  },
  "from": "from8",
  "timestamp": 28,
  "to": "to2"
}
```

