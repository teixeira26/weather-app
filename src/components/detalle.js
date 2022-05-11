import React from "react";


function Detalle(props){

    return(
        <div className="card" style={{width: '18rem', display:'inline-block', margin:'20px'}}>
            <div className="card-body">
                <button onClick={()=>props.eliminar(props.props.name)} style={{backgroundColor:'red', borderRadius:'20px', width:'20px',height:'20px', display:'flex',alignContent:'center',justifyContent:'center', border:'none'}}><p style={{marginTop:'-5px', color:'white'}}>x</p></button>
                <h5 className="card-title">{props.props.name}</h5>
                <img src={props.props.img}alt='clima' className='text-center' style={{width: '30%' }}></img>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">temperatura mínima: {`${props.props.minima}`}</li>
                    <li className="list-group-item">temperatura máxima: {`${props.props.maxima}`}</li>
                    <li className="list-group-item">humedad: {`${props.props.humedad}`}</li>
                    <li className="list-group-item">temperatura aparente: {`${props.props.aparente}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default Detalle