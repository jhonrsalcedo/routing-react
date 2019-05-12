import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav className="navegacion">
        <NavLink to={'/aboutus'} activeClassName="activo">Nosotros</NavLink>
        <NavLink to={'/product'} activeClassName="activo">Productos</NavLink>
        <NavLink to={'/contact'} activeClassName="activo">Contacto</NavLink>
        </nav>
     );
}
 
export default Nav;