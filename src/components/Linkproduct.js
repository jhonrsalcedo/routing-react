import React from 'react';
import './Linkproduct.css';
//aplicamos destructuring

const Linkproduct = (props) => {
     //si no existe una imagen return null
     if(!props.product) return null;
       
    const {imagen, nombre, precio, descripcion} = props.product;
    

    return ( 
        <div className="info-producto">
            <div className="imagen">
            <img src={`/img/${imagen}.png`} alt={nombre} />
            </div>
        <div className="info">
            <h2>{nombre}</h2>
            <p className="precio">$ {precio}</p>
            <p>{descripcion}</p>

        </div>
        </div>
     ); 
}
 
export default Linkproduct;