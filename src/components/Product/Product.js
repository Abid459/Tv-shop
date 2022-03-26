import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css'

const Product = (props) => {
    const {clickHandle,productInfo} = props
    const {name:brand,id,picture:img,price,model}=productInfo;
        return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="info">
            <h3>Brand: {brand}</h3>
            <p>Model: {model}</p>
            <h3>Price: {price}</h3>
                  
            <button onClick={()=>clickHandle(productInfo)}>Add to Cart<FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon></button>
            </div>
            </div>
    );
};

export default Product;