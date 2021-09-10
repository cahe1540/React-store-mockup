import React from 'react'

export const HistoryItem = ({ item }) => {
    return (
        <div className = "cart-item history">
            <img src = {`.${item.image}`} alt = 'img'></img>
            <p>{item.name}</p>
            <p>1/30/2020</p>
            <p className = "price">${item.price}</p>
        </div>
    )
}