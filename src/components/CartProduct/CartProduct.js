import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartProduct.css'

const CartProduct = (props) => {
    const{productInCart,deleteItem} = props;
    console.log(props)
    const{picture,name,model,id}  = productInCart;
    return (
        <div className='cartProduct'>
            <img src={picture} alt="" />
            {/* <h4>{name}</h4> */}
            <p><b >{name}</b>: {model}</p>
            <FontAwesomeIcon className='fontawsome' icon={faTrash} onClick={()=>deleteItem(id)}></FontAwesomeIcon>
        </div>
    );
};

export default CartProduct;