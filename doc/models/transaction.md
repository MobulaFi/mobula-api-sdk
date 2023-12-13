
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `number \| undefined` | Optional | - |
| `asset` | [`AssetTransaction \| undefined`](../../doc/models/asset-transaction.md) | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `methodId` | `string \| null \| undefined` | Optional | - |
| `hash` | `string \| undefined` | Optional | - |
| `blockchain` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `amountUsd` | `number \| undefined` | Optional | - |
| `to` | `string \| undefined` | Optional | - |
| `from` | `string \| undefined` | Optional | - |
| `txCost` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "timestamp": 28,
  "asset": {
    "name": "name0",
    "symbol": "symbol2",
    "id": 240,
    "contract": "contract0",
    "logo": "logo6"
  },
  "type": "type6",
  "method_id": "method_id8",
  "hash": "hash0"
}
```

