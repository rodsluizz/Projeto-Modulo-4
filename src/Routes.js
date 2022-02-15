import React from "react";
import {Route, Routes} from "react-router-dom";
import Contato from "./components/contato/Contato";
import Internacionais from "./components/internacionais/Internacionais";
import Nacionais from "./components/nacionais/Nacionais";
import HomePage from "./components/homepage/HomePage";

export default () => {
    return(

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/Contato" element={ <Contato /> }/>
            <Route path="/Nacionais" element={ <Nacionais /> }/>
            <Route path="/Internacionais" element={ <Internacionais /> }/>
        </Routes>

    )
 }