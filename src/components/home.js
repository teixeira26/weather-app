import React from "react";
import '../css/home.css'
import { Profile } from "./profile";

function Home(){
    return(
        <header>
            <div className="div1">
                <h1>Bienvenidx a mí weather app</h1>
            </div>
            <div className="div2">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div>
            <Profile></Profile>
        </header>
        
    )
}

export default Home;