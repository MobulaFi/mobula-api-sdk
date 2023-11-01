# Getting Started with Mobula API SDK 

A powerful tool to fetch real-time crypto metrics data with ease.

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Generate API Key](#-generate-api-key)
- [Usage](#-usage)
- [SDK Methods](#-sdk-methods)
- [Documentation](#-documentation)
- [Upgrade](#-upgrade)
- [Support](#-support)

## 🌟 Introduction

With the Mobula API SDK, you can seamlessly integrate real-time crypto metrics into your projects. Whether you're building a new crypto dashboard or just exploring the world of cryptocurrencies, Mobula API SDK has got you covered.

## 🛠 Prerequisites

Before starting with the Mobula API SDK, ensure you have the following:

- Node.js installed on your machine. Download and install Node.js from [here](https://nodejs.org/).

## 📦 Installation

1. Install the package by running the following command in your project directory:

```bash
npm install mobula-api-sdk
```

## 🔑 Generate API Key

For an enhanced experience, acquire an API key. Generate your key and select a plan fitting your project [here](https://developer.mobula.fi/reference/intro/authentication).

## 💡 Usage

Initiate the SDK as shown below:

```typescript
import { Mobula } from "./node_modules/mobula-api-sdk/src/apiWrapper_2";

const mobula = new Mobula("YOUR_API_KEY_HERE");

mobula
  .fetchWalletHistoryBalance({
    wallet: "0x77A89C51f106D6cD547542a3A83FE73cB4459135",
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

Replace `YOUR_API_KEY_HERE` with your API key.

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

- [Getting Started](https://developer.mobula.fi/reference/getting-started)
- [API Reference](https://developer.mobula.fi/reference/introduction-copy)

## 🔄 Upgrade

Upgrade plans:

| Plan        | Credits/month | Support | Price/month | Link         |
|-------------|---------------|---------|-------------|--------------|
| Free        | 300,000       | 24/7 support on Telegram, Discord, and Slack | $0 | [Link](https://developer.mobula.fi/reference/introduction-copy) |
| Premium     | 1,500,000     | 24/7 support on Telegram, Discord, and Slack | $250 | [Upgrade now](https://checkout.stripe.com/c/pay/plink_1NrSA0FPgmBnPcIqOkueK6R8#fidkdWxOYHwnPyd1blppbHNgWjA0S3VqMm9DVWJoR2tVZkx0NDB1STc2MnRXcjRHZE5AZmhEPT1iMUBKUG9tXDU1MnV2bTVEYUhhcnJrT2Y3dE5TX2hRfGhqZkgxS0BBfHN1NFd2f1RfYDdjNTVPYFJrdEE0TicpJ3VpbGtuQH11anZgYUxhJz8nYFNkMnIzN20wNnxcNV9kMG5uJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmFgc2BpanVgdytoamdwaWQrY2wqJ3gl) |
| Advanced    | 5,000,000     | 24/7 support on Telegram, Discord, and Slack | $750 | [Upgrade now](https://checkout.stripe.com/c/pay/cs_live_b1jPve4PMttJ3SCsHKVf6p1pw2P9qvN0grFWevQkL6e54QgJvJ0PkCrA94#fidkdWxOYHwnPyd1blppbHNgWjA0S3VqMm9DVWJoR2tVZkx0NDB1STc2MnRXcjRHZE5AZmhEPT1iMUBKUG9tXDU1MnV2bTVEYUhhcnJrT2Y3dE5TX2hRfGhqZkgxS0BBfHN1NFd2f1RfYDdjNTVPYFJrdEE0TicpJ3VpbGtuQH11anZgYUxhJz8nY19gZExsM31pM0lkYlw9Y1xfJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmFgc2BpanVgdytoamdwaWQrY2wqJ3gl) |
| Enterprise  | Unlimited     | 24/7 support, custom endpoints, 99.9% SLA | from $750 | [Contact us](https://t.me/MobulaPartnerBot?start=Enterprise) |

## 📞 Support

Need assistance? Contact our support bot on [Telegram: Bot Support](https://t.me/MobulaPartnerBot?start=Mobula_API_Support).

---

Crafted with 💙 by Mobula for builders like you
