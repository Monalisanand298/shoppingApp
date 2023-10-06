import Navbar from "./components/Navbar";
import "./App.css";
import Shopcard from "./components/ShopCard";
import Singlepage from "./components/Singlepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./components/sign/Sign";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shopcard />} />
        <Route path="/view/:id" element={<Singlepage />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
