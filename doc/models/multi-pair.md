
# Multi Pair

## Structure

`MultiPair`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string \| undefined` | Optional | - |
| `token0` | [`Token02 \| undefined`](../../doc/models/token-02.md) | Optional | - |
| `token1` | [`Token02 \| undefined`](../../doc/models/token-02.md) | Optional | - |
| `liquidity` | `number \| undefined` | Optional | - |
| `volume` | `number \| undefined` | Optional | - |
| `price` | `number \| undefined` | Optional | - |
| `protocol` | `string \| undefined` | Optional | - |
| `blockchain` | `string \| undefined` | Optional | - |
| `exchange` | `string \| null \| undefined` | Optional | - |
| `factory` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "address": "address2",
  "token0": {
    "address": "address6",
    "decimals": 154,
    "symbol": "symbol2",
    "name": "name0",
    "logo": "logo6"
  },
  "token1": {
    "address": "address4",
    "decimals": 6,
    "symbol": "symbol0",
    "name": "name8",
    "logo": "logo4"
  },
  "liquidity": 220.64,
  "volume": 161.42
}
```

