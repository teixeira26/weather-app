import React from "react";
import "../css/main.css"
import axios from 'axios';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";



const Form = ()=>{
    const navigate = useNavigate();
    const {user} = useAuth0();
    const [dataForm, setDataForm] = useState({
        telefono:"",
        hora_de_alarme:"",
    })
    const cambiarformData = (e)=>{
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }
    const enviarFormData = async(e)=>{
        e.preventDefault();
        //console.log({...dataForm, email:user.email})
        await axios.post('https://weather-app266.herokuapp.com/addDataUser',{...dataForm, email:user.email});
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'alteración realizada con suceso',
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/ciudades')
    }
    return(
        <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Agregar telefono y hora de alerta</h2>
                    <form onSubmit={enviarFormData}>
                        <div class="input-group">
                            <input class="input--style-2" type="text" name="telefono" placeholder="(01)2345-6789"  onChange={cambiarformData} value={dataForm.telefono}/>
                        </div>
                        
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2" type="time" name="hora_de_alarme" placeholder="hora de alerta" onChange={cambiarformData} value={dataForm.hora_de_alarme}/>
                                </div>
                            </div>
                        </div>
                        <div class="p-t-30">
                            <button class="btn btn-primary" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Form