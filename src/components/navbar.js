import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import "../css/styles.css"
import Swal from "sweetalert2";
function Navbar(){
    const {isAuthenticated, user, loginWithRedirect, logout} = useAuth0();

    const logear = async ()=>{
        await loginWithRedirect()
        console.log(user, 'funciona')
    }
    useEffect(()=>{
        if(isAuthenticated){
        //console.log(user)
            axios.post('https://weather-app266.herokuapp.com/agregarUser',{
            username:user.name,
            email:user.email
        })
    }
    },[isAuthenticated])
    return(
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <a class="navbar-brand" href="#page-top">Weather-whats app</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><NavLink className="nav-link" to='/'>Home</NavLink></li>
                        {isAuthenticated&&
                        <li class="nav-item"><NavLink className="nav-link" to='/ciudades'>Buscar ciudades</NavLink></li>}
                        {!isAuthenticated&&
                        <li class="nav-item"><NavLink className="nav-link" to=''  onClick={logear}>Sign in</NavLink></li>}
                        {isAuthenticated&&
                        <li class="nav-item"><NavLink className="nav-link" to=''  onClick={()=>logout({returnTo:window.location.origin})}>Log out</NavLink></li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;