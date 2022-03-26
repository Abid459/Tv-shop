import { faCoffee, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartProduct.css'

const CartProduct = ({productInCart}) => {
    const{picture,name,model}  = productInCart;
    return (
        <div className='cartProduct'>
            <img src={picture} alt="" />
            {/* <h4>{name}</h4> */}
            <p>{model}</p>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default CartProduct;