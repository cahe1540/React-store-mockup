import React from 'react'

export const DashItem = ({ item }) => {
    return (
        <div className = "cart-item history">
            <img src = {`.${item.image}`} alt = 'img'></img>
            <p>{item.name}</p>
            <p>---</p>
            <p className = "price">${item.price}</p>
        </div>
    )
}