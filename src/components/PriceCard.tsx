interface PriceCardProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    price: number;
  };
}

export function PriceCard({ coin }: PriceCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
      <h3>{coin.name}</h3>
      <p>{coin.symbol.toUpperCase()}</p>
      <p>${coin.price.toFixed(2)}</p>
    </div>
  );
}