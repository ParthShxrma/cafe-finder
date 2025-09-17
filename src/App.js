import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CafeSearch from "./pages/CafeSearch";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cafe-search" element={<CafeSearch />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;