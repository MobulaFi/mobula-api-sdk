
# Wallet History Response

## Structure

`WalletHistoryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceHistory` | `number[] \| undefined` | Optional | - |
| `balanceUsd` | `number \| undefined` | Optional | - |
| `wallet` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "balance_history": [
    [
      167.69,
      167.7
    ],
    [
      167.69,
      167.7
    ]
  ],
  "balance_usd": 239.28,
  "wallet": "wallet2"
}
```

