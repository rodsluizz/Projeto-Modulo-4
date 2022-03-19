import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './StyleButtons.css';

export default function LogoutButton() {

    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated &&(
            <button className="btnStyle" onClick={() => logout()}>
                Sair
            </button>
        )
    )
}