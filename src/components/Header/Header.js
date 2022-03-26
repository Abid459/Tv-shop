import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const showCart = () =>{
    const cart = document.querySelector('.cart');
    cart.style.display = 'block';
    console.log('cart is',cart)
}

const Header = ({ count }) => {
    return (
        <div className='header' >
            <div className='header-title'>
                <h3>TV SHOP</h3>
                <p>Add four items</p>
            </div>
            <div className="cartcount" onClick={showCart}>

                <FontAwesomeIcon className='cartShopping' icon={faCartShopping}></FontAwesomeIcon>
                <h6 className='count' >{count}</h6>
            </div>
        </div>
    );
};

export default Header;