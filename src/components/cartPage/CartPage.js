import React from 'react'
import "./CartPage.scss"
import Cart from '../cartBox/Cart'
import { useSelector } from "react-redux"

const CartPage = () => {
    const products = useSelector(state => state.cart.products);
    
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => { total += item.quantity * item.price?.slice(1) });
        return total.toFixed(2)
    }

    return (
        <div className='cartPage mx my-16'>
            <div className='title mb-6'>
            <div className='titleContent'>
                <h1 className=''>Your Cart</h1>
                <span>{products.length} items</span>
            </div>
            <div className='total'>
                    <span className='pr-5'>SUBTOTAL</span>
                    <span>${totalPrice()}</span>
            </div>
        </div>
        <Cart />
        </div>
    )
}

export default CartPage