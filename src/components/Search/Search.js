import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    readData = (e) =>{
        //console.log(e.target.value)
        //termino de busqueda
        const finishedSearch = e.target.value;

        //enviamos por props al componente Router y por medio de un metodo realizamos la busqueda
        this.props.search(finishedSearch);
    }
    render() { 
        return ( 
            //creamos un metodo de busqueda
            <form className="buscador">
                <input type="text" placeholder="Busqueda" onChange={this.readData}/>
            </form>
         );
    }
}
 
export default Search;