import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    const [selectedProduct,setSelectedProduct] = useState([])
    let [warning,setWarning] = useState('');
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const clearCart = () => {
        cart = [];
        warning = ''
        setWarning(warning);
        setCart(cart);
    }
const deleteItem = (id) =>{
    // const remainCart = [];
    const remainCart = cart.filter(product=>product.id!==id)
    setCart(remainCart)

}

    const choseProduct = () => {
        const randRange = cart.length
        const randNum = Math.floor(Math.random() * randRange);
        const selectProduct = cart[randNum]
        setSelectedProduct(selectProduct)

    }
    const addToCart = (product) => {
        const { id } = product;
        let newCart = [...cart];
        const isExist = newCart.find(x => x.id === id);
        if (isExist) {
         warning ='You cant add one item twice'
         setWarning(warning)
         return;
        }else if(newCart.length>=4){
            warning = "You can't add more than four items"
            setWarning(warning)
        } 
        else {
            warning =''
            setWarning(warning)
            newCart.push(product);
            setCart(newCart);
        }
    }
    return (
        <div className='shop'>
            <Products products={products} clickHandle={addToCart}></Products>
            <Cart cart={cart} clearCart={clearCart} selectedProduct= {selectedProduct} choseProduct={choseProduct} warning={warning}deleteItem={deleteItem}></Cart>
        </div>
    );
};

export default Shop;