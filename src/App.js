import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SerchFeed from "./pages/SearchFeed";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const searching = () => {};
  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} searching={searching} />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search" element={<SerchFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
