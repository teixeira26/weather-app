import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./logout";


export const Profile=()=>{
    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return(
            <h1>cargando</h1>
        )
    }

    return(
        isAuthenticated&&<div>
            <img src={user.picture}></img>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <LogoutButton></LogoutButton>
        </div>
    )
}