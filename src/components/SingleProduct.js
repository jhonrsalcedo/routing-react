import React from 'react';
import {Link} from 'react-router-dom'


const SingleProduct = (props) => {
    //hacemos destructuring para llamar los datos desde data.json
    const {imagen, nombre, precio, id}= props.infoProduct
    return ( 
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span> $ {precio} </span> </p>
            <Link to={`/product/${id}`}>Mas Información</Link>
        </li>
     );
}
 
export default SingleProduct;