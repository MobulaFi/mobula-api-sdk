
# Asset 5

## Structure

`Asset5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `asset` | [`Asset \| undefined`](../../doc/models/asset.md) | Optional | - |
| `price` | `number \| undefined` | Optional | Current price of the asset. |
| `estimatedBalance` | `number \| undefined` | Optional | Estimated balance of the asset in the wallet. |
| `tokenBalance` | `number \| undefined` | Optional | Token balance of the asset in the wallet. |
| `crossChainBalances` | [`Record<string, CrossChainBalances> \| undefined`](../../doc/models/cross-chain-balances.md) | Optional | - |

## Example (as JSON)

```json
{
  "asset": {
    "data": {
      "id": 138,
      "name": "name0",
      "symbol": "symbol2",
      "contracts": [
        "contracts3",
        "contracts2",
        "contracts1"
      ],
      "blockchains": [
        "blockchains9",
        "blockchains0"
      ]
    }
  },
  "price": 136.6,
  "estimated_balance": 135.76,
  "token_balance": 8.5,
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

