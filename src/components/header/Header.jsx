import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function Header() {

  const {user, isAuthenticated } = useAuth0();

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

                {isAuthenticated &&(
                  <li onClick={()=>{
                  navigate("/Destinos")
                }}>Destinos <i className="fas fa-map-marked-alt"></i></li>
                )}
                
            </ul>
        </header>
    </>  
  );
}
