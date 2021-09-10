import {React, useEffect, useState } from 'react'
import { Card } from './Card'

export const ProductsGrid = ({ products, sortProducts, setProducts }) => {
    
    const [sortVal, setSort] = useState('none');

    useEffect(() => {
      
    }, [sortVal]);
    
    return (
        <>
            <section className = "search-section">
            <form>
                <div className = "search">
                    <input className = "searchbar" type = "text" placeholder = "Find items..."></input>
                    <button className = "search-btn">Search</button>
                </div>
            </form>
            <div className = 'filters'>
                <input type = "radio" name = "sort"/> None
                <input type = "radio" name = "sort"/> Sort by name a-z
                <input type = "radio" name = "sort"/> Sort by name z-a
                <input type = "radio" name = "sort"/> Sort by price incr
                <input type = "radio" name = "sort"/> Sort by price deacr
                <input type = "radio" name = "sort"/> Sort by most popular
            </div>
        </section>
        <section className = "productGrid container">
                {products.map(item => (<Card key = {item.id} item = {item}/>))}
        </section>
        </>
    )
}
