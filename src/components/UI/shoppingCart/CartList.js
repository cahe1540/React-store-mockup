import React from 'react'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'

export const CartList = ({ cartItems }) => {
    
    const calcTotal = (cartItems) => {
        let sum = 0;
        cartItems.forEach((cur) => {
            sum += cur.price;
        });
        return sum.toFixed(2);
    }
    
    return (
        <section className = "shopping-cart-section">
            <div className = 'cart-list'>
                <div><h2>Shopping Cart</h2></div>    
                {cartItems.map((item) => (
                    <CartItem key = {item.id} item = {item} />
                ))}            
                <div className = 'cart-item-checkout'>
                    <div><p className = "total-cost">Sub Total: ${calcTotal(cartItems)}</p></div>
                    <div><Link to = '/checkout'> <button> Proceed to Checkout </button></Link></div>
                </div>
            </div>
        </section>
    )
}
