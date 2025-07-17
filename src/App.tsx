import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomFeedCreator from "./pages/CustomFeedCreator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-feed" element={<CustomFeedCreator />} />
      </Routes>
    </Router>
  );
}

export default App;