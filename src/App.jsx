import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Shop from "./pages/shop/shop";
import Cart from './pages/cart/Cart'
function App() {
  return (
    <>
   <Navbar/>
    <Shop/>
    <Cart/>
    </>
  );
}

export default App;
