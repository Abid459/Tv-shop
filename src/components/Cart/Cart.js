import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css'

const Cart = ({ cart ,clearCart,choseOne}) => {
    console.log(cart)
    return (
        <div classNameName='cart'>
            <h2>Added product</h2>
            {
                cart.map(product => <CartProduct productInCart = {product}
                key = {cart.id}
                ></CartProduct>)
            }
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Close One For Me
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* modal end */}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;