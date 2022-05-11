import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function Navbar(){
    const {isAuthenticated, user, loginWithRedirect} = useAuth0();

    const logear = async ()=>{
        await loginWithRedirect()
        console.log(user, 'funciona')
    }
    useEffect(()=>{
        if(isAuthenticated){
        //console.log(user)
            axios.post('https://github.com/teixeira26/weather-app/agregarUser',{
            username:user.name,
            email:user.email
        })
    }
    },[isAuthenticated])
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid row">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        {isAuthenticated&&
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/ciudades'>Buscar ciudades</NavLink>
                        </li>
                        }
                        <li className="nav-item">
                            <NavLink className="nav-link" to=''  onClick={logear}>Sign in</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;