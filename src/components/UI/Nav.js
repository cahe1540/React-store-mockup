import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Nav = ({ curPage, user, signOut }) => {
    
    return (
        <nav>
            {user.name !== '' ? (<ul className = "welcomeAndCart" >
                <li><Link to="/dashboard">Welcome, {user.name}</Link></li>
                <li><Link to="/shoppingcart"><FontAwesomeIcon icon = {faShoppingCart}/></Link></li>
                <li><Link  onClick = {() => signOut()} to="/home">Sign Out</Link></li>
            </ul>) :
            (<ul className = "loginAndCart" >
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/shoppingcart"><FontAwesomeIcon icon = {faShoppingCart}/></Link></li>
            </ul>)}
            <ul className="menu">
                <li><Link to="/home" className = {curPage === '' || curPage === '/home' || curPage === '/' ? 'current': ''} /* onClick = {selectHome} */>Home</Link></li>
                <li><Link to="/products" className = {curPage === '/products' ? 'current': ''} /* onClick = {selectProducts} */>Products</Link></li>
                <li><Link to="/about" className = {curPage === '/about' ? 'current': ''} /* onClick = {selectAbout} */>About</Link></li>
                <li><Link to="/contact" className = {curPage === '/contact' ? 'current': ''} /* onClick = {selectContact} */>Contact Us</Link></li>
            </ul>
        </nav>
    )
}
