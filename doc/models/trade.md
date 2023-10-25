
# Trade

## Structure

`Trade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | The amount of asset in the trade. |
| `amountUsd` | `number \| undefined` | Optional | The amount in USD of the trade. |
| `asset` | [`Asset1 \| undefined`](../../doc/models/asset-1.md) | Optional | - |
| `blockchain` | `string \| undefined` | Optional | The blockchain used for the trade. |
| `from` | `string \| undefined` | Optional | The from address of the trade. |
| `timestamp` | `number \| undefined` | Optional | The timestamp of the trade. |
| `to` | `string \| undefined` | Optional | The to address of the trade. |

## Example (as JSON)

```json
{
  "amount": 236.96,
  "amount_usd": 179.2,
  "asset": {
    "id": 240,
    "name": "name0",
    "symbol": "symbol2"
  },
  "blockchain": "blockchain6",
  "from": "from8"
}
```

