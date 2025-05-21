import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { LoginPopup } from "./Components/LoginPopup";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { PlaceOrder } from "./Pages/PlaceOrder";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import { ScrooltoTop } from "./Components/ScrooltoTop";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <ScrooltoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
