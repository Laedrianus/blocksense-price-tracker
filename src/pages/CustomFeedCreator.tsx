import React, { useState } from "react";
import { Link } from "react-router-dom";

type CustomFeed = {
  id: string;
  name: string;
  price: number;
};

const CustomFeedCreator: React.FC = () => {
  const [feeds, setFeeds] = useState<CustomFeed[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addFeed = () => {
    if (!name || !price) return;
    const newFeed: CustomFeed = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      price: parseFloat(price),
    };
    setFeeds((prev) => [...prev, newFeed]);
    setName("");
    setPrice("");
  };

  const removeFeed = (id: string) => {
    setFeeds((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Simulate Your Own Oracle Feed
        </h2>
        <Link
          to="/"
          className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to Tracker
        </Link>
      </header>

      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Asset Name (e.g. ETH/USDT)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            placeholder="Simulated Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <button
          onClick={addFeed}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add Feed
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="border border-gray-300 rounded p-4 flex flex-col justify-between shadow-sm bg-white"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {feed.name}
              </h3>
              <p className="text-gray-500">${feed.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFeed(feed.id)}
              className="mt-4 text-sm text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomFeedCreator;
