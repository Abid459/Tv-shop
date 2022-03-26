import React from 'react';
import './product.css'

const Product = (props) => {
    const {clickHandle,productInfo} = props
    const {name:brand,id,picture:img,price,model}=productInfo;
        return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Brand: {brand}</h2>
            <p>Model: {model}</p>
            <h3>Price: {price}</h3>
            <button onClick={()=>clickHandle(productInfo)}>Add to Cart</button>
        </div>
    );
};

export default Product;