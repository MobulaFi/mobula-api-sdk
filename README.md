# Getting Started with Mobula API SDK

Mobula empowers builders with top-tier APIs for market data, wallet data & DeFi quotes. Industry-leading coverage & granularity, SQL queries, and high flexibility.

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Prerequisites](#-prerequisites)
- [Generate API Key](#-generate-api-key)
- [Installation](#-installation)
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
import { Mobula } from 'mobula-api-sdk';

const mobula = new Mobula('YOUR_API_KEY_HERE');

mobula
  .fetchWalletHistoryBalance({
    wallet: '0x77A89C51f106D6cD547542a3A83FE73cB4459135',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

Replace `YOUR_API_KEY_HERE` with your API key.

### Response

```json
{"data":{"wallet":["0x77a89c51f106d6cd547542a3a83fe73cb4459135"],"balance_usd":186.11174894116627,"balance_history": [...]}}

```

---

## 📚 Documentation

- [Getting Started](https://docs.mobula.fi/sdk/introduction)
- [Index](https://docs.mobula.fi/sdk/methods_index)

## 🔄 Upgrade

Upgrade plans:

| Plan       | Credits/month | Support                                      | Price/month | Link                                                         |
| ---------- | ------------- | -------------------------------------------- | ----------- | ------------------------------------------------------------ |
| Free       | 300,000       | 24/7 support on Telegram, Discord, and Slack | $0          | [Link](https://docs.mobula.fi/api-reference/introduction)    |
| Premium    | 1,500,000     | 24/7 support on Telegram, Discord, and Slack | $250        | [Upgrade now](https://admin.mobula.fi/)                      |
| Advanced   | 5,000,000     | 24/7 support on Telegram, Discord, and Slack | $750        | [Upgrade now](https://admin.mobula.fi/)                      |
| Enterprise | Unlimited     | 24/7 support, custom endpoints, 99.9% SLA    | from $750   | [Contact us](https://t.me/MobulaPartnerBot?start=Enterprise) |

## 📞 Support

Need assistance? Contact our support bot on [Telegram: Bot Support](https://t.me/MobulaPartnerBot?start=Mobula_API_Support)

---

Crafted with 💙 by Mobula for builders like you
