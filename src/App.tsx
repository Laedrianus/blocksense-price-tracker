import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomFeedCreator from "./pages/CustomFeedCreator";
import blocksenseLogo from "./assets/blocksense-logo.png"; // Logo dosya yolunu güncelle
import { useState, useEffect } from "react";
import PriceCard from "./components/PriceCard"; // varsa PriceCard bileşeni
import axios from "axios";

function App() {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoinData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <header className="flex items-center justify-center p-4 bg-white shadow mb-6">
        <img src={blocksenseLogo} alt="Blocksense Logo" className="h-10 mr-3" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wide">
          Blocksense Top 100 Price Tracker
        </h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-4 font-sans">
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
          }
        />
        <Route path="/custom-feed" element={<CustomFeedCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
