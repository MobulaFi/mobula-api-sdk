# Getting Started with Mobula API SDK 

Mobula empowers builders with top-tier APIs for market data, wallet data & DeFi quotes. Industry-leading coverage & granularity, SQL queries, and high flexibility.

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Prerequisites](#-prerequisites)
- [Generate API Key](#-generate-api-key)
- [Installation](#-installation)
- [SDK Methods](#-sdk-methods)
- [Documentation](#-documentation)
- [Upgrade](#-upgrade)
- [Support](#-support)

## 🌟 Introduction

With the Mobula API SDK, you can seamlessly integrate real-time crypto metrics into your projects. Whether you're building a new crypto dashboard or just exploring the world of cryptocurrencies, Mobula API SDK has got you covered.

## 🛠 Prerequisites

Before starting with the Mobula API SDK, ensure you have the following:

- Node.js installed on your machine. Download and install Node.js from [here](https://nodejs.org/).

## 🔑 Generate API Key

For an enhanced experience, acquire an API key. Generate your key and select a plan fitting your project [here](https://docs.mobula.fi/api-reference/authentification).

## 📦 Installation

1. Initialize a new npm project in your directory

```bash
npm init -y
```

2. Install mobula-api-sdk

```bash
npm install mobula-api-sdk
```

3. Initiate the SDK as shown below

```typescript
import { Mobula } from "mobula-api-sdk";

const mobula = new Mobula("YOUR_API_KEY_HERE");

mobula
  .fetchWalletHistoryBalance({
    wallet: "0x77A89C51f106D6cD547542a3A83FE73cB4459135",
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

Replace `YOUR_API_KEY_HERE` with your API key.

### Response

```json

body: '{"data":{"wallet":["0x77a89c51f106d6cd547542a3a83fe73cb4459135"],"balance_usd":186.11174894116627,"balance_history":
[[1650788304000,0],[1650788305000,0],[1650874705000,40.94737444508439],
[1650961105000,41.43979364186007],[1651047505000,41.52255389488385],
[1651133905000,39.98507396566903],[1651220305000,41.36797682434358],
[1651306705000,39.94252843778348],[1651393105000,38.42918052538283],
[1651479505000,38.44553804299468],[1651565905000,42.12988132520523],
[1651652305000,41.08260516823677],[1651738705000,42.932806984287325],
[1651825105000,40.20314283431752],[1661265693000,61.1200498094']]}}'

```

---

## 🛠 SDK Methods

The `Mobula` class provides several methods to interact with the Mobula API. Here's a list of available methods:

1. `fetchCryptoDataByName(options: { name?: string; requestOptions?: RequestOptions; })`: Fetch crypto data by its name.
   
2. `fetchWalletNFTs(options: { wallet?: string; force?: boolean; requestOptions?: RequestOptions; })`: Retrieve NFTs associated with a given wallet.
   
3. `fetchAllCryptoDetails(options: { fields?: string; requestOptions?: RequestOptions; })`: Get details of all cryptocurrencies.
   
4. `fetchAssetMarketData(options: { asset: string; blockchain?: string; requestOptions?: RequestOptions; })`: Fetch market data for a specific asset.
   
5. `fetchAssetMarketHistory(options: { asset: string; blockchain?: string; from?: number; to?: number; requestOptions?: RequestOptions; })`: Get market history for a particular asset.
   
6. `fetchAssetMetadata(options: { asset?: string; requestOptions?: RequestOptions; })`: Retrieve metadata for a specific asset.
   
7. `fetchAssetTradeHistory(options: { asset: string; maxResults?: number; requestOptions?: RequestOptions; })`: Get trade history for an asset.
   
8. `fetchMultipleAssetMarketData(options: { assets: string; blockchains?: string; requestOptions?: RequestOptions; })`: Fetch market data for multiple assets.
   
9. `fetchSwapQuote(options: { chain: string; fromToken: string; toToken: string; fromAddress: string; amount: bigint; slippage: number; receiver?: string; type?: TypeEnum; requestOptions?: RequestOptions; })`: Get a swap quote.
   
10. `fetchWalletHistoryBalance(options: { wallet: string; from?: number; to?: number; requestOptions?: RequestOptions; })`: Retrieve the history balance of a wallet.
    
11. `fetchWalletHoldings(options: { wallet: string; timestamp?: number; asset?: string; blockchain?: string; tokens?: boolean; nfts?: boolean; coins?: boolean; requestOptions?: RequestOptions; })`: Get holdings of a wallet.
    
12. `fetchWalletTransactions(options: { wallet: string; from?: number; to?: number; asset?: string; blockchain?: string; trades?: boolean; transactions?: boolean; limit?: number; offset?: number; order?: OrderEnum; requestOptions?: RequestOptions; })`: Fetch transactions of a wallet.

---

## 📚 Documentation

- [Getting Started](https://docs.mobula.fi/sdk/introduction)
- [Index](https://docs.mobula.fi/sdk/methods_index)

## 🔄 Upgrade

Upgrade plans:

| Plan        | Credits/month | Support | Price/month | Link         |
|-------------|---------------|---------|-------------|--------------|
| Free        | 300,000       | 24/7 support on Telegram, Discord, and Slack | $0 | [Link](https://docs.mobula.fi/api-reference/introduction) |
| Premium     | 1,500,000     | 24/7 support on Telegram, Discord, and Slack | $250 | [Upgrade now](https://admin.mobula.fi/) |
| Advanced    | 5,000,000     | 24/7 support on Telegram, Discord, and Slack | $750 | [Upgrade now](https://admin.mobula.fi/) |
| Enterprise  | Unlimited     | 24/7 support, custom endpoints, 99.9% SLA | from $750 | [Contact us](https://t.me/MobulaPartnerBot?start=Enterprise) |

## 📞 Support

Need assistance? Contact our support bot on [Telegram: Bot Support](https://t.me/MobulaPartnerBot?start=Mobula_API_Support)

---

Crafted with 💙 by Mobula for builders like you
