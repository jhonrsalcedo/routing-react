import React, {Component} from 'react';
//Destructuring 
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import AboutUs from './AboutUs';
import Error from './Error';
import Linkproduct from './Linkproduct';
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
        //console.log(this.state)
        return(
            //en este componente debe estar todo lo que sean los enlaces
            //Swicth nos va a permitir tener varios Route o rutas y cambiar de page
            //exact se encargara de cargar la ruta del inicio
            //para mantener el menu sobre todas las paginas el component se debe colocar fuera de la etiqueta Switch
            <BrowserRouter>
            <div className="contenedor">
                <Header 

                />
                <Switch>
                    {/* para pasar componentes con props utilizasmos render={()=>}*/}
                    <Route exact path="/"  render={() =>(
                        <Products
                            products={this.state.products}
                        />
                        )} />
                    {/* para pasar componentes estaticos se usa compoent={} */}
                    <Route exact path="/AboutUs" component={AboutUs} />
                    <Route exact path="/product/:productId"  render={(props) =>{
                       let idProduct = props.location.pathname.replace('/product/', '');
                       //console.log(idProduct)
                       return(
                           <Linkproduct
                            product={this.state.products[idProduct]}
                           />
                       )
                    }} />
                    <Route component={Error}/>


                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;