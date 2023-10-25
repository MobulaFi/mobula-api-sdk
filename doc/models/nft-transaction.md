
# NFT Transaction

## Structure

`NFTTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collection` | `string \| undefined` | Optional | The NFT collection name. |
| `from` | `string \| undefined` | Optional | The sender's address. |
| `timestamp` | `number \| undefined` | Optional | The timestamp of the transaction. |
| `to` | `string \| undefined` | Optional | The receiver's address. |
| `tokenId` | `string \| undefined` | Optional | The NFT token id. |

## Example (as JSON)

```json
{
  "collection": "collection4",
  "from": "from4",
  "timestamp": 18,
  "to": "to2",
  "tokenId": "tokenId2"
}
```

