
# Asset 3

## Structure

`Asset3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | [`Asset4 \| undefined`](../../doc/models/asset-4.md) | Optional | - |
| `price` | `number \| undefined` | Optional | - |
| `estimatedBalance` | `number \| undefined` | Optional | - |
| `tokenBalance` | `number \| undefined` | Optional | - |
| `crossChainBalances` | [`Record<string, CrossChainBalances> \| undefined`](../../doc/models/cross-chain-balances.md) | Optional | - |

## Example (as JSON)

```json
{
  "asset": {
    "name": "name0",
    "symbol": "symbol2",
    "id": 240,
    "contracts": [
      "contracts3"
    ],
    "logo": "logo6"
  },
  "price": 132.32,
  "estimated_balance": 122.84,
  "token_balance": 4.42,
  "cross_chain_balances": {
    "key0": {
      "address": "address6",
      "balance": 55.84,
      "balanceRaw": "balanceRaw8",
      "chainId": 182
    },
    "key1": {
      "address": "address6",
      "balance": 55.84,
      "balanceRaw": "balanceRaw8",
      "chainId": 182
    }
  }
}
```

