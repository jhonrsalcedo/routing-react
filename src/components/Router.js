import React, {Component} from 'react';
//Destructuring 
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Products from './Products/Products';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Error from './Error/Error';
import Linkproduct from './Linkproduct/Linkproduct';
import infoProduct from '../data/data.json';

class Router extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            finishedSearch:''
        }
    }
    
    //para llamar los datos antes de que carguen el componente
    componentWillMount(){
        this.setState({
            products: infoProduct
        })
       
    }


    searchProduct = search =>{
        if(search.length > 3){
            this.setState({
                finishedSearch: search
            })

        }else{
            this.setState({
                finishedSearch: ''
            })
        }

    }

    render(){
        //console.log(this.state)
        //realizamos una copia del state para mantenerlos utilizamos 
        let products = [...this.state.products];

        let search = this.state.finishedSearch;

        let result;

        //si la busqueda recibe un string vacio
        if(search !== ''){
            //console.log('no esta vacio')
            result = products.filter(product =>(
                product.nombre.toLowerCase().indexOf(search.toLowerCase() ) !== -1
            ))
        }else{
            //console.log('si esta vacio') se mostrara todos los productos
            result = products;
        }

        return(
            //en este componente debe estar todo lo que sean los enlaces
            //Swicth nos va a permitir tener varios Route o rutas y cambiar de page
            //exact se encargara de cargar la ruta del inicio
            //para mantener el menu sobre todas las paginas el component se debe colocar fuera de la etiqueta Switch
            <BrowserRouter>
            <div className="contenedor">
                <Header />
                <Nav />
                <Switch>
                    {/* para pasar componentes con props utilizamos render={()=>}*/}
                    <Route exact path="/"  render={() =>(
                        <Products
                            products={result}
                            searchProduct ={this.searchProduct}
                        />
                        )} />
                    {/* para pasar componentes estaticos se usa compoent={} */}
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/product" render={() =>(
                       <Products
                       products={result}
                       searchProduct ={this.searchProduct}
                   />
                   )}/>
                    <Route exact path="/product/:productId"  render={(props) =>{
                       let idProduct = props.location.pathname.replace('/product/', '');
                       //console.log(idProduct)
                       return(
                           <Linkproduct
                            product={this.state.products[idProduct]}
                           />
                       )
                    }} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Error}/>


                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;