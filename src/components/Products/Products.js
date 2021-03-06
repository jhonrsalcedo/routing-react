import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import Search from '../Search/Search';
import './Products.css';

class Products extends Component {
    
    render() { 
        return ( 
            <div className="productos">
                <h2> Nuestros Productos</h2>
                <Search 
                    search={this.props.searchProduct}
                />
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