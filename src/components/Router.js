import React, {Component} from 'react';
//Destructuring 
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './Index';
import AboutUs from './AboutUs';
import Error from './Error';
import infoProduct from '../data/data.json';

class Router extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    //para llamar los datos antes de que carguen el componente
    componentWillMount(){
        this.setState({
            products: infoProduct
        })
    }

    render(){
        return(
            //en este componente debe estar todo lo que sean los enlaces^
            //Swicth nos va a permitir tener varios Route o rutas
            //exact se encargara de cargar la ruta del inicio
            <BrowserRouter>
            
                <Switch>
                    <Route exact path="/"  component={Index} />
                    <Route exact path="/AboutUs" component={AboutUs} />
                    <Route component={Error}/>


                </Switch>
            
            </BrowserRouter>
        )
    }
}

export default Router;