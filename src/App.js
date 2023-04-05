import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./component/navbar";
import { Home } from './pages/Home/home';
import { Shop } from './pages/Shop/shop';
import { Gallery } from './pages/Gallery/gallery';
import { Cart } from './pages/Cart/cart';
import { Login } from './pages/Login/login';
import { Footer } from "./component/footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
