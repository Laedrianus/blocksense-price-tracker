import { useState } from "react";

interface SimulatedFeed {
  name: string;
  price: number;
}

function CustomFeedCreator() {
  const [coinName, setCoinName] = useState("");
  const [coinPrice, setCoinPrice] = useState("");
  const [feeds, setFeeds] = useState<SimulatedFeed[]>([]);

  const handleSimulate = () => {
    if (!coinName || isNaN(Number(coinPrice))) return;

    const existing = feeds.find((f) => f.name.toLowerCase() === coinName.toLowerCase());
    const newFeed = { name: coinName, price: Number(coinPrice) };

    if (existing) {
      setFeeds((prev) =>
        prev.map((f) =>
          f.name.toLowerCase() === coinName.toLowerCase() ? newFeed : f
        )
      );
    } else {
      setFeeds((prev) => [...prev, newFeed]);
    }

    setCoinName("");
    setCoinPrice("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>🧪 Simulate Your Own Feed</h1>

      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Enter coin name (e.g. MyCoin)"
          value={coinName}
          onChange={(e) => setCoinName(e.target.value)}
          style={{ padding: "0.5rem", flex: "1 1 200px" }}
        />
        <input
          type="number"
          placeholder="Enter price (e.g. 12.5)"
          value={coinPrice}
          onChange={(e) => setCoinPrice(e.target.value)}
          style={{ padding: "0.5rem", flex: "1 1 200px" }}
        />
        <button onClick={handleSimulate} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Simulate Feed
        </button>
      </div>

      {feeds.length > 0 && (
        <>
          <h2 style={{ marginTop: "2rem" }}>Simulated Feeds</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {feeds.map((feed, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <h3>{feed.name}</h3>
                <p>${feed.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CustomFeedCreator;
