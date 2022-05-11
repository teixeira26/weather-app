const estadoInicial = {
    ciudades:[],
}

export default function reducer(state=estadoInicial, action){
    switch(action.type){
        case 'CARGARCIUDADES':
            return Object.assign(state, {
                ...state,
                ciudades:[...state.ciudades, action.payload],
            })

        default:
            return(
                state
            )
    }
}
