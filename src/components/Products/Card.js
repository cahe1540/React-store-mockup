import React from 'react'

export const Card = ({item}) => {
    return (
        <div className = 'card '>
            <img src = {`.${item.image}`} alt = 'img'></img>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className = 'card-btnArea'>
                <button>Add To Cart</button>
                <span className= "price">${item.price}</span>
            </div>
        </div>
    )
}
