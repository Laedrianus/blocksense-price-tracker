# 🧠 Blocksense Price Tracker & Simulate Your Own Feed

A lightweight educational dApp demonstrating how **peg-aware oracles** can improve reliability in DeFi pricing — built as part of the **Blocksense** ecosystem.

> This project simulates the concept of peg-aware feeds using real-time data from [CoinGecko](https://coingecko.com), until official Blocksense endpoints become publicly available.

---

## 🔍 What is Blocksense?

Blocksense is a decentralized oracle network that enables secure, reliable, and peg-aware data feeds for smart contracts. It ensures data accuracy and consistency across chains, helping prevent price manipulation and depeg incidents. Blocksense supports modular oracle architecture, on-chain consensus, and real-time reporting.

---

What is this Dapp?

🧪 Simulate Your Own Feed
The "Simulate Your Own Feed" page (CustomFeedCreator.tsx) provides users with a dummy interface to understand how the Blocksense oracle infrastructure works. While no real data is transmitted on-chain, the page simulates the process of creating a price feed in an interactive and visual way.

🔧 What Can Users Do on This Page?
Enter a Token Name and Symbol (e.g., “My USD” - MYUSD)

Select a base token whose real-time price is fetched from CoinGecko (e.g., USDC, DAI)

Input a Custom Price for their own simulated feed (e.g., 1.05)

Click Submit, and the following happens:

✅ The inputted data is added to a dynamic table

✅ The simulated feed is displayed as if it were submitted to the Blocksense oracle system

✅ A "Depegged?" check compares the custom price to the live reference price and evaluates its peg status

⚙️ Technical Overview
We use a custom hook (useCoingecko.ts) to fetch real-time token prices

The user-defined price is compared with the live price

The result is rendered as a mock feed entry in the UI

No actual on-chain transactions occur — this is purely a front-end simulation

🎯 Purpose of This Feature
To demonstrate the core principles behind Blocksense’s peg-aware oracle design

To provide a testable demo interface before real integrations are implemented

To lay the groundwork for future testnet deployments and developer onboarding

---

## 🧩 Tech Stack

| Layer      | Tools                          |
|------------|-------------------------------|
| Frontend   | React + Vite                  |
| Styling    | CSS Modules                   |
| Data Fetch | CoinGecko REST API            |
| Routing    | React Router DOM              |
| Hosting    | Vercel                        |

---

## 📂 Folder Structure
blocksense-price-tracker/
│
├── public/ # Static assets
├── src/
│ ├── assets/ # Images (e.g., logo)
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom data-fetching hook
│ ├── pages/ # Home & Custom Feed Creator
│ └── App.tsx # Main routing file
│
├── package.json
└── README.md


---

## 🛠️ Installation & Usage

### Prerequisites

- Node.js >= 18
- Git
- (Optional) Vercel CLI

### 1. Clone the Repository

```bash
git clone https://github.com/Laedrianus/blocksense-price-tracker.git
cd blocksense-price-tracker

2. Install Dependencies
npm install

3. Start Development Server
npm run dev

Visit http://localhost:5173 in your browser.

4. Build for Production
npm run build

Deploy
You can deploy this project on Vercel (recommended):

Go to vercel.com
Connect your GitHub repo
Set the root directory if needed (e.g. /)
Click Deploy

⚠️ Current Limitations
🔐 Blocksense oracle API is not yet publicly accessible.
Currently, price data is fetched via the CoinGecko API.
🤖 The "Custom Feed Creator" page simulates feed logic but does not submit to a real oracle network yet.
These will be replaced with actual Blocksense endpoints once available.

Future Plans
Replace CoinGecko with native Blocksense endpoints
Add real-time depeg alerts using oracle triggers
Allow users to publish custom feeds to testnets
Extend UI to show trust levels and consensus states

📄 License
MIT — free to use, modify, and build upon.

For contact: Discord: https://discord.gg/K4sqACWQ
X: @bilenls
