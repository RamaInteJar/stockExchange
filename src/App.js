import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Stocklisting from "./pages/Stocklisting";
import { Route, Routes } from "react-router-dom";
import Stocks from "./components/Stocks";

const App=()=>{
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/tocks" element={<Stocklisting />}/>
        <Route path="/Stocks/:symbol" element={<Stocks Stocks={Stocks}/>}/>
      </Routes>
    </div>
  );
}
export default App;
