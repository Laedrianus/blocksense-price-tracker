import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}

function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Logo ve Başlık yan yana, logo solda */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <img
          src="/blocksense-logo.png"
          alt="Blocksense Logo"
          style={{ width: 50, height: 50 }}
        />
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
          BLOCKSENSE TOP 100 PRICE TRACKER
        </h1>
      </div>

      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        Real-time prices for top cryptocurrencies. Explore our demo to create your
        own feed!
      </p>

      <Link to="/custom-feed">
        <button
          style={{
            marginBottom: "2rem",
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#0070f3",
            border: "none",
            borderRadius: 6,
            color: "white",
          }}
        >
          🛠️ Try Custom Feed Creator
        </button>
      </Link>

      {/* Coin listesi grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        {coins.map((coin) => (
          <div
            key={coin.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: "1rem",
              backgroundColor: "#f9f9f9",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={coin.image}
              alt={coin.name}
              style={{ width: 50, height: 50, marginBottom: 10 }}
            />
            <h3 style={{ margin: "0.5rem 0" }}>{coin.name}</h3>
            <p style={{ margin: 0, color: "#555" }}>{coin.symbol.toUpperCase()}</p>
            <p style={{ fontWeight: "bold", marginTop: 8 }}>
              ${coin.current_price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
