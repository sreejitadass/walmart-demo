import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js"; // Import your Home Page component
import RecycleMart from "./components/RecyclePage.js"; // Import your RecycleMart component
import Cart from "./components/Cart.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recycle-mart" element={<RecycleMart />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
