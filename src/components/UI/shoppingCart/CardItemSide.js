import React from 'react'

export const CartItemSide = ({ item }) => {
    return (
        <div className = "side-cart-item">
            <img src = {`.${item.image}`} alt = 'img'></img>
            <p>{item.name}</p>
            <p className = 'side-quantity'>1</p>
            <p className = "side-price">${item.price}</p>
        </div>
    )
}
