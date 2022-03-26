import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import ChosedProduct from '../ChosedProduct/ChosedProduct';
import './Cart.css'

const Cart = ({ cart, clearCart, choseProduct, selectedProduct, warning, deleteItem }) => {
    return (
        <div >
            <div className="cart" >
                <h2>Added product</h2>
                <div className="cartcount">

                </div>
                <hr />
                {
                    cart.map(product => <CartProduct productInCart={product}
                        key={product.id}
                        deleteItem={deleteItem}
                    ></CartProduct>)
                }
                <h4>{warning}</h4>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={choseProduct}>
                    Chose one for me
                </button>
                <button onClick={clearCart}>Clear Cart</button>
            </div>





            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Your product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                selectedProduct ? <ChosedProduct selectedProduct={selectedProduct}></ChosedProduct> : 'Please add products to cart First'
                            }

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal end */}

        </div>

    );
};

export default Cart;