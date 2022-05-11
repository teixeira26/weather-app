import React, { useState } from "react";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";



const Signin = ()=>{
    const {loginWithRedirect, user} = useAuth0();

    const logear = async ()=>{
        await loginWithRedirect()
        console.log(user, 'funciona')
    }
    const [formulario, setFormulario] = useState({
        username:undefined,
        email:undefined,    
        password:undefined,
    });

    const cambio = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        })
    }
    const sendToDb =async (e)=>{
        e.preventDefault();
        console.log(formulario);
        await axios.post('https://github.com/teixeira26/weather-app/agregarUser',formulario)
        console.log('lo envió a la db')
    }
    return( 
        <div>
        <form onSubmit={sendToDb}>
            <input type="text" name="username" placeholder="username" onChange={cambio}/>
            <input type="email" name="email" placeholder="email" onChange={cambio}/>
            <input type="password" name="password" placeholder="contraseña" onChange={cambio}/>
            <input type='submit' value="enviar"/>
        </form>
        <button onClick={logear}>login</button>
        </div>
    )
}

export default Signin;