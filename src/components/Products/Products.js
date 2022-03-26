import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const {products,clickHandle} = props;
    console.log(props)
    return (
        <div className='products'>
            {
                products.map(product=> <Product productInfo = {product}
                key = {product.id}
                clickHandle = {clickHandle}
                ></Product>)
            }
        </div>
    );
};

export default Products;