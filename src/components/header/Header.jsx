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
                }}>Home <i class="fas fa-home"></i></li>

                <li onClick={()=>{
                  navigate("/Nacionais")
                }}>Nacionais <i class="fas fa-location-arrow"></i></li>

                <li onClick={()=>{
                  navigate("/Internacionais")
                }}>Internacionais <i class="fas fa-globe-americas"></i></li>

                <li onClick={()=>{
                  navigate("/Contato")
                }}>Contato <i class="fas fa-phone"></i></li>
            </ul>
        </header>
    </>  
  );
}
