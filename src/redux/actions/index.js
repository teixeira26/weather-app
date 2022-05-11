const cargarCiudades = (info)=>{
    return({
        type:'CARGARCIUDADES',
        payload:info,
    })
}

module.exports={
    cargarCiudades,
}
