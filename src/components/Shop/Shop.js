import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const clearCart = () => {
        cart = [];
        setCart(cart);
    }
    const choseOne = () => {
        const randNum =Math.floor( Math.random()*4);
        console.log(randNum)
        return(
            <div>
                <Modal></Modal>
            </div>
        )
    }
    const addToCart = (product) => {
        const { id } = product;
        let newCart = [...cart];
        const isExist = newCart.find(x => x.id === id);
        if (isExist) {
            return;
        } else {
            newCart.push(product);
            setCart(newCart);
        }
    }
    return (
        <div className='shop'>
            <Products products={products} clickHandle={addToCart}></Products>
            <Cart cart={cart} clearCart={clearCart} choseOne={choseOne}></Cart>
            <Modal></Modal>
        </div>
    );
};

export default Shop;