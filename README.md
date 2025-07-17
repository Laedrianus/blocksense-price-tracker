# 🧠 Blocksense Price Tracker & Simulate Your Own Feed

What’s the Purpose?

The Blocksense Price Tracker & Simulate Your Own Feed dApp is designed to help users understand how peg-aware oracle infrastructure works—both through real price data and an interactive simulation.

🔹 The Price Tracker section displays real crypto asset prices synced with the Blocksense oracle infrastructure, demonstrating how reliable on-chain data feeds are delivered.

🔹 The Simulate Your Own Feed section provides an educational interface where users can create their own simulated price feeds using dummy data. While no real data is transmitted on-chain, it allows users to intuitively grasp how oracle systems are structured and function.

This dApp serves as a simple yet powerful tool for both developers and DeFi enthusiasts to explore how Blocksense’s peg-aware technology works in practice and why it matters.

---

⚠️ Current Limitations

🔐 Blocksense oracle API is not yet publicly accessible.

Currently, price data is fetched via the CoinGecko API.

🤖 The "Custom Feed Creator" page simulates feed logic but does not submit to a real oracle network yet.
These will be replaced with actual Blocksense endpoints once available.

--- However, the dApp is structurally ready. ---

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

Future Plans
Replace CoinGecko with native Blocksense endpoints
Add real-time depeg alerts using oracle triggers
Allow users to publish custom feeds to testnets
Extend UI to show trust levels and consensus states

📄 License
MIT — free to use, modify, and build upon.

For contact: Discord: https://discord.gg/K4sqACWQ
X: @bilenls
