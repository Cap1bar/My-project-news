import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Main/Header";
import { AddNews } from "./pages/AddNews";
import { Sport } from "./pages/Sport";
import { HotNews } from "./pages/HotNews";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_news" element={<AddNews />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/hot_news" element={<HotNews />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/politic" element={<Politic />} />
      </Routes>
    </div>
  );
}

export default App;