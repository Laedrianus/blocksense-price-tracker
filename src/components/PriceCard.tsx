
import React from "react";

export const PriceCard = ({ coin }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <img src={coin.image} alt={coin.name} className="w-16 h-16 mb-3" />
      <h2 className="text-lg font-semibold text-gray-800">{coin.name}</h2>
      <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
      <p className="mt-2 text-xl font-bold text-green-600">${coin.current_price.toLocaleString()}</p>
    </div>
  );
};
