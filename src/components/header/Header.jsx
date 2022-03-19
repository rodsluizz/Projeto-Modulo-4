import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate()
  return (
    <>
        <header className="header__">
            <ul>
                <li onClick={()=>{
                  navigate("/")
                }}>Home <i className="fas fa-home"></i></li>

                <li onClick={()=>{
                  navigate("/Nacionais")
                }}>Nacionais <i className="fas fa-location-arrow"></i></li>

                <li onClick={()=>{
                  navigate("/Internacionais")
                }}>Internacionais <i className="fas fa-globe-americas"></i></li>

                <li onClick={()=>{
                  navigate("/Contato")
                }}>Contato <i className="fas fa-phone"></i></li>

                <li onClick={()=>{
                  navigate("/Destinos")
                }}>Destinos <i className="fas fa-map-marked-alt"></i></li>
            </ul>
        </header>
    </>  
  );
}
