import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function LoginButton() {

    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return(
        !isAuthenticated &&(
        <button className="btnStyle" onClick={() => loginWithRedirect()}>
            Login 
        </button>
        )
        
    )
}