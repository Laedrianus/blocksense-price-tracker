import { useState, useEffect } from "react";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
}

export default function useCoinData() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const mockCoins = [
      { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: 30000 },
      { id: "ethereum", name: "Ethereum", symbol: "ETH", price: 2000 },
      { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", price: 0.25 },
    ];
    setCoins(mockCoins);
  }, []);

  return coins;
}