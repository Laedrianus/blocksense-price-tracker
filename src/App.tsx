import { useEffect, useState } from "react";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
};

export default function App() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("Fiyat verisi alınamadı:", err);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 10000);
    return () => clearInterval(interval);
  }, []);

  // Sadece ilk 100 coin alındığından zaten 20x5 = 100 ediyor.

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🚀 Coin Price Tracker Top 100</h1>
      <div className="grid grid-cols-5 gap-6 justify-center">
        {coins.slice(0, 100).map((coin, index) => (
          <div
            key={coin.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            style={{ minWidth: "120px" }}
          >
            <div className="flex items-center w-full mb-2">
              <div className="flex-shrink-0 text-gray-600 font-bold text-lg mr-2 select-none">
                {index + 1}.
              </div>
              <img
                src={coin.image}
                alt={coin.name}
                className="w-10 h-10"
              />
            </div>
            <p className="text-center text-sm font-semibold">{coin.symbol.toUpperCase()}</p>
            <p className="text-center text-sm text-green-600">${coin.current_price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
