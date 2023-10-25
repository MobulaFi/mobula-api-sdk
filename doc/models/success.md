
# Success

## Structure

`Success`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountOut` | `string \| undefined` | Optional | - |
| `error` | `string \| undefined` | Optional | - |
| `isAggregator` | `boolean \| undefined` | Optional | - |
| `protocol` | `string \| undefined` | Optional | - |
| `tx` | [`Tx \| undefined`](../../doc/models/tx.md) | Optional | - |
| `willFail` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "error": "Insufficient balance",
  "amountOut": "amountOut0",
  "isAggregator": false,
  "protocol": "protocol8",
  "tx": {
    "data": "data0",
    "from": "from2",
    "to": "to4",
    "value": "value2"
  }
}
```

