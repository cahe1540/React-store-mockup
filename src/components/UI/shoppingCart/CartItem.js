import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const CartItem = ({ item }) => {
    return (
        <div className = "cart-item">
            <img src = {`.${item.image}`} alt = 'img'></img>
            <p>{item.name}</p>
            <input type ="text" placeholder = "quantity" defaultValue = '1'/>
            <p className = "price">${item.price}</p>
            <FontAwesomeIcon icon = {faTimes} className = 'remove-from-cart'/>
        </div>
    )
}
