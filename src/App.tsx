import React from "react";
import { PriceCard } from "./components/PriceCard";
import { useCoinData } from "./hooks/useCoinData";
import blocksenseLogo from "./assets/blocksense-logo.png"; // logo dosyasını assets klasörüne ekle

function App() {
  const { coinData, loading, error } = useCoinData();

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <header className="flex items-center justify-center mb-8">
        <img src={blocksenseLogo} alt="Blocksense Logo" className="h-10 mr-3" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wide">
          Top 100 Price Tracker
        </h1>
      </header>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">
          Error fetching coin data. Please try again later.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {coinData.map((coin) => (
          <PriceCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default App;
