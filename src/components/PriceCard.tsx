import React from "react";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

interface PriceCardProps {
  coin: Coin;
}

function PriceCard({ coin }: PriceCardProps) {
  const priceChangeClass =
    coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={coin.image}
        alt={`${coin.name} logo`}
        className="w-12 h-12 mb-2"
      />
      <h2 className="text-lg font-semibold">{coin.name}</h2>
      <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
      <p className="text-xl font-bold mt-2">${coin.current_price.toFixed(2)}</p>
      <p className={`text-sm mt-1 ${priceChangeClass}`}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
}

export default PriceCard;
