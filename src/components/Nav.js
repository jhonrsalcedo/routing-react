import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="navegacion">
        <Link to={'/aboutus'}>Nosotros</Link>
        <Link to={'/product'}>Productos</Link>
        <Link to={'/contact'}>Contacto</Link>
        </nav>
     );
}
 
export default Nav;