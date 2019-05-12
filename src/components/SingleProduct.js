import React from 'react';


const SingleProduct = (props) => {
    //hacemos destructuring para llamar los datos desde data.json
    const {imagen, nombre, precio, id}= props.infoProduct
    return ( 
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span> $ {precio} </span> </p>
            <a href="#">Mas Info</a>
        </li>
     );
}
 
export default SingleProduct;