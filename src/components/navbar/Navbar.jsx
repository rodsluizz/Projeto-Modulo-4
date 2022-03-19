import React from "react";
import LoginButton from "../autenticacaoComponents/LoginButton";
import LogoutButton from "../autenticacaoComponents/LogoutButton";
import Profile from "../autenticacaoComponents/Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isLoading } = useAuth0();

  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <nav className="nav__bar">
        <h2>
          Viáji <i className="fas fa-suitcase-rolling"></i>
        </h2>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </nav>
    </>
  );
}
