import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomFeedCreator from "./pages/CustomFeedCreator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/custom-feed" element={<CustomFeedCreator />} />
    </Routes>
  );
}

export default App;
