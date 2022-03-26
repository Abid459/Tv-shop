import React from 'react';
import './chosedProduct.css'

const ChosedProduct = ({selectedProduct}) => {
    const {picture,name,model,price} = selectedProduct;
    return (
        <div className='chosedProduct'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Model:{model}</p>
            <h4>Price:{price}</h4>

        </div>
    );
};

export default ChosedProduct;