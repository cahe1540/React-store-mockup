import React from 'react'
import { DashItem } from './DashItem'

export const ShoppingDash = ({ cartItems }) => { 
    return (
        <section className = "shopping-cart-section">
            {cartItems.length === 0 ? (<div clasName = "cart-list"> No Items In Cart </div>) : (<div className = 'cart-list'>
                <div><h2>Shopping Cart</h2></div>    
                {cartItems.map((item) => (
                    <DashItem key = {item.id} item = {item} />
                ))}            
            </div>)}
        </section>
    )
}
