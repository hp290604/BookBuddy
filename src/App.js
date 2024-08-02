
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";
// import Navbar from "./Components/Navbar/Navbar";
// import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/hotels" element= {<List/>} />
          <Route path="/description" element= {<Hotel/>} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
