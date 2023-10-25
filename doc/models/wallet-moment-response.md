
# Wallet Moment Response

## Structure

`WalletMomentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceUsd` | `number \| undefined` | Optional | The balance in USD. |
| `detailedBalance` | [`Record<string, DetailedBalance> \| undefined`](../../doc/models/detailed-balance.md) | Optional | - |
| `wallet` | `string \| undefined` | Optional | The wallet address. |

## Example (as JSON)

```json
{
  "balance_usd": 156.6,
  "detailed_balance": {
    "key0": {
      "balance": 71.06,
      "balance_usd": 41.34
    },
    "key1": {
      "balance": 71.06,
      "balance_usd": 41.34
    }
  },
  "wallet": "wallet4"
}
```

