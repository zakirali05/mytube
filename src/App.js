import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SerchFeed from "./pages/SearchFeed";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState("New");

  return (
    <Router>
      <Navbar selected={selected} setSelected={setSelected} />
      <Routes>
        <Route
          path="/"
          element={<Feed selected={selected} setSelected={setSelected} />}
        />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search" element={<SerchFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
