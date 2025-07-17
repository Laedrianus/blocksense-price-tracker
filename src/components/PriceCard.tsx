import React from "react";

type PriceCardProps = {
  coin: {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    image: string;
  };
};

const PriceCard: React.FC<PriceCardProps> = ({ coin }) => {
  return (
    <div className="border border-gray-300 rounded p-4 shadow bg-white flex flex-col items-center">
      <img src={coin.image} alt={coin.name} className="w-12 h-12 mb-2" />
      <h3 className="font-semibold text-lg">{coin.name}</h3>
      <p className="uppercase text-gray-500">{coin.symbol}</p>
      <p className="mt-2 font-bold">${coin.current_price.toLocaleString()}</p>
    </div>
  );
};

export default PriceCard;
