import React from 'react'
import { CartItemSide } from './CardItemSide'

export const SideShoppincCart = ({ cartItems }) => {
    const calcTotal = (cartItems) => {
        let sum = 0;
        cartItems.forEach((cur) => {
            sum += cur.price;
        });
        return sum.toFixed(2);
    }
    
    return (
            <section className = 'side-cart-list'>
                <div className = 'side-wrapper'>
                    <div className = 'side-cart-item'>
                        <p>     </p>
                        <p>Name </p>
                        <p>Quantity </p>
                        <p>Price</p>
                    </div>
                    {cartItems.map((item) => (
                        <CartItemSide key = {item.id} item = {item} />
                    ))}           
                    </div>
                    <div className = 'side-checkout'>
                        <div><p className = "side-cost">Total: ${calcTotal(cartItems)}</p></div>
                    </div>
                
            </section>
    )
}
