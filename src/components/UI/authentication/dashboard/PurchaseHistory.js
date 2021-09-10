import React from 'react'
import { HistoryItem } from './HistoryItem'

export const PurchaseHistory = ({history}) => {
    return (
        <section className = "shopping-cart-section">
            {history.length === 0 ? (<div clasName = "cart-list"> <p>No items visible</p> </div>) : (<div className = 'cart-list'>
                <div><h2>Purchase History</h2></div>    
                {history.map((item) => (
                    <HistoryItem key = {item.id} item = {item} />
                ))}            
            </div>)}
        </section>
    )
}
