import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Detalle from "./detalle";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {cargarCiudades} from '../redux/actions/index'


    function Cards(){
    const {user} = useAuth0();
    const dispatch = useDispatch();
    const [cargado, setCargado] = useState(false)
    const [ciudad, setCiudad] = useState('');
    const [cards, setNewCard] = useState([]);
    const [disabled, setDidabled] = useState(true);
    const {ciudades} = useSelector(estado=>estado.ciudades);
    const [dataForm, setDataForm] = useState({
        telefono:"",
        hora_de_alarme:"",
    })
//-------------------------------------------inicio-----------------------------------------------
     useEffect(()=>{
        async function buscar(){
            let ciudadesDb = await axios.get('https://weather-app266.herokuapp.com/');
            let results = ciudadesDb.data.find(x=>x.email === user.email);
            results = results.Ciudades.map(x=>x.nombre);
            console.log(results)
            setCiudad(results);
            dispatch(cargarCiudades(results))
        
            let newCards = [];
        for(var x = 0; x<results.length; x++){
            let a = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${results[x]}&appid=eb4dae42849d5d33c5a495614e05e6bf&units=metric`);
            let newCard = {
                name:a.data.name,
                minima:a.data.main.temp_max,
                maxima:a.data.main.temp_min,
                humedad:a.data.main.humidity,
                aparente:a.data.main.feels_like,
                img:`https://openweathermap.org/img/wn/${a.data.weather[0].icon}@2x.png`,
            }
            newCards.push(newCard)
        }
        console.log(newCards)
        setNewCard(newCards)

    }
        buscar();
    
        async function cargarFormData(){
            let info = await axios.get('https://weather-app266.herokuapp.com/');
            let userdata = info.data.find(el=>el.email === user.email);
            console.log(userdata.Datauser.telefono)
            setDataForm({
                telefono:userdata.Datauser.telefono,
                hora_de_alarme:userdata.Datauser.hora_de_alarme,
            })
            console.log(dataForm);
        }
        cargarFormData()
        //buscar ciudades agregadas en la base de datos para mostrarlas
    }, [user]);

    //--------------------------------------------------------------------------------------
    const consulta = async (e)=>{
        e.preventDefault();
        try {
        let a = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=eb4dae42849d5d33c5a495614e05e6bf&units=metric`);
         console.log(user)
         await axios.post('https://weather-app266.herokuapp.com/agregar',{nombre: a.data.name, email:user.email})
        let newCard = {
            name:a.data.name,
            minima:a.data.main.temp_max,
            maxima:a.data.main.temp_min,
            humedad:a.data.main.humidity,
            aparente:a.data.main.feels_like,
            img:`https://openweathermap.org/img/wn/${a.data.weather[0].icon}@2x.png`,
        }
        if(!cards.find(x=>x.name === newCard.name)){
            setNewCard([...cards, newCard])
            setCargado(false);
        }
        else{alert('ya agregaste una card con este nombre')}

        console.log(cards);
        } catch (error) {
        alert(error)

        }
        
    }
    useEffect(()=>{
        if(cards.length>0)alert('card agregado con suceso')
    },[cards])

    const cambio = (evento)=>{
        setCiudad(evento.target.value);
    }
    const eliminar = async(elemento)=>{
        await axios.delete('https://weather-app266.herokuapp.com/sacar',{
            data:{
                ciudade: elemento,
                email:user.email
            }
        })
        const cardss = cards.filter(x=>x.name!==elemento);
        console.log(elemento)
        console.log(cardss);
        setNewCard(cardss);
        alert('card eliminado con suceso');
    }
    const habilitar = (e)=>{
        e.preventDefault()
        if(disabled===true)setDidabled(false);
        else {setDidabled(true)};
    }
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
        alert('alteración realizada con suceso')
        setDidabled(true)
    }
    return(
        <div className="container">
            {console.log(cards)}
            <h1>Hola</h1>
            <form onSubmit={enviarFormData}>
                <input type="text" name="telefono" className="form-control " placeholder="telefono"disabled={disabled} onChange={cambiarformData} value={dataForm.telefono}/>
                <input type="time" name="hora_de_alarme" className="form-control " placeholder="hora de alerta" disabled={disabled} onChange={cambiarformData} value={dataForm.hora_de_alarme}/>
                <input type="submit" value="enviar" disabled={disabled}></input>
            </form>
            <input type="submit" value="cambiar" onClick={habilitar}></input>
            <form onSubmit={consulta}>
                <input type='text' className="form-control me-2" style={{width: '30%', display:'inline'}} placeholder='digitá una ciudad' onChange={cambio} ></input>
                <input type='submit'  className="btn btn-primary"></input>
            </form>
            <div className="card-container">
            {cards.length>0?cards.map((x,y)=>{
                return (<Detalle props ={cards[y]} eliminar={eliminar} key={y}></Detalle>)
            }):<h1>Todavia no agregaste ninguna ciudad</h1>}
            </div>
        </div>
    )
}

export default Cards