import React from "react";
import PriceCard from "../components/PriceCard";
import { useCoinData } from "../hooks/useCoinData";
import blocksenseLogo from "../assets/blocksense-logo.png";
import { Link } from "react-router-dom";

function Home() {
  const { coinData, loading, error } = useCoinData();

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <header className="mb-8 relative">
        {/* Simulate Your Own Feed butonu sağ üstte */}
        <div className="absolute top-0 right-0">
          <Link
            to="/custom-feed"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Simulate Your Own Feed
          </Link>
        </div>

        {/* Logo ve başlık ortada */}
        <div className="flex items-center justify-center space-x-3">
          <img src={blocksenseLogo} alt="Blocksense Logo" className="h-10" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wide">
            Blocksense Top 100 Price Tracker
          </h1>
        </div>
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

export default Home;
