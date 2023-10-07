import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Stocklisting from "./pages/Stocklisting";
import { Route, Routes } from "react-router-dom";
import Stocks from "./components/Stocks";
import Stock from "./pages/Stock";

const App=()=>{
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/Stocks/:symbol" element={<Stocklisting Stocks={Stocks}/>}/>
      </Routes>
    </div>
  );
}
export default App;
