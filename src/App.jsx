import React from "react";
import Carrosel from "./components/carrosel/Carrosel";
import "./components/carrosel/carrosel.css";
import Header from "./components/header/Header";
import "./components/header/header.css";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/navbar.css";
import Footer from "./components/footer/Footer";
import "./components/footer/footer.css"
import Cards from "./components/cards/Cards";
import "./components/cards/cards.css"
import HomePage from "./components/homepage/HomePage";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes></Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
