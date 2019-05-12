import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import './Products.css';

class Products extends Component {
    
    render() { 
        return ( 
            <div className="productos">
                <h2> Nuestros Productos</h2>
                 {/* recorremos la lista <li> data </li> */}
                <ul className="lista-productos">
                    {Object.keys(this.props.products).map(product =>(
                            <SingleProduct
                            infoProduct={this.props.products[product]}
                            key={product}
                        />
                    ))}
                    
                </ul>

            </div>
         );
    }
}
 
export default Products;