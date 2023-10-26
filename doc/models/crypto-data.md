
# Crypto Data

## Structure

`CryptoData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blockchains` | `(string \| null)[] \| undefined` | Optional | The blockchains on which the cryptocurrency exists |
| `id` | `number \| undefined` | Optional | The unique identifier of the cryptocurrency |
| `name` | `string \| undefined` | Optional | The name of the cryptocurrency |
| `symbol` | `string \| null \| undefined` | Optional | The symbol of the cryptocurrency |

## Example (as JSON)

```json
{
  "blockchains": [
    "Ethereum"
  ],
  "id": 100000871,
  "name": "Arc",
  "symbol": "ARC"
}
```

