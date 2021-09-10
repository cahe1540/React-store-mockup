import React from 'react'
import { ShoppingDash } from './ShoppingDash'
import { PurchaseHistory } from './PurchaseHistory'

export const Dashboard = ({user}) => {
    return (
        <section className = 'dashboard'>
            <ShoppingDash  cartItems = {user.cart}/>
            <PurchaseHistory history = {user.history}/>
        </section>
    )
}
