import React, { useEffect } from 'react'
import { CartList } from './CartList'

export const ShoppingCart = ({ cartItems }) => {
    useEffect(() => {

    }, [cartItems]);

    return (
        <section className = "shopping-cart-section">
            <h2>Shopping Cart</h2>            
            <CartList cartItems = {cartItems}/>
        </section>
    )
}
