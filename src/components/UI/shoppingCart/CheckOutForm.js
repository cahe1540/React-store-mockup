import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCcVisa } from '@fortawesome/free-brands-svg-icons'
import {faCcAmex } from '@fortawesome/free-brands-svg-icons'
import {faCcDiscover } from '@fortawesome/free-brands-svg-icons'
import {faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { SideShoppincCart } from './SideShoppincCart'

export const CheckOutForm = ({ cartItems }) => {
    return (
        <section className = 'checkout-section'>
            <form className = 'checkout'>
                <div className = 'checkout-form-data'>
                    <div className = 'left-side'>
                        <p>Billing Address</p>
                        <label htmlFor = 'name'>Name</label>
                        <input type = 'text' id = 'name' placeholder = "Enter Name"></input>
                        <label htmlFor = 'email'>Email</label>
                        <input type = 'text' id = 'email' placeholder = "Enter Email"></input>
                        <label htmlFor = 'address'>Address</label>
                        <input type = 'text' id = 'address' placeholder = "Enter Address"></input>
                        <label htmlFor = 'city'>Last Name</label>
                        <input type = 'text' id = 'city' placeholder = "Enter City"></input>
                        <div className = 'city-zip'>
                            <div className = "stack">
                                <label htmlFor = 'state'>State</label>
                                <input type = 'text' id = 'state' placeholder = "Enter State"></input>
                            </div>
                            <div className = "stack">
                                <label htmlFor = 'zip'>Last Name</label>
                                <input type = 'text' id = 'zip' placeholder = "Enter Zip"></input>
                            </div>
                        </div>
                        <div className = 'shipping-checkbox'>
                            <input type = "checkbox"/><span>Shipping address same as billing address</span>
                        </div>
                    </div>
                    <div className = 'right-side'>
                        <p>Payment</p>
                        <p>Accepted Cards</p>
                        <div className = 'card-icons'>
                            <FontAwesomeIcon icon={faCcVisa} style = {{color : 'navy'}} className = "creditcard-icons"/>
                            <FontAwesomeIcon icon={faCcAmex} style = {{color : 'blue'}} className = "creditcard-icons"/>
                            <FontAwesomeIcon icon={faCcMastercard} style = {{color : 'red'}} className = "creditcard-icons"/>
                            <FontAwesomeIcon icon={faCcDiscover} style = {{color : 'orange'}} className = "creditcard-icons"/>
                        </div>
                        <label htmlFor = 'nameoncard'>Name on Card</label>
                        <input type = 'text' id = 'nameoncard' placeholder = "Enter Name On Card"></input>
                        <label htmlFor = 'creditcard'>Credit Card Number</label>
                        <input type = 'text' id = 'creditcard' placeholder = "1111-2222-3333-4444"></input>
                        <label htmlFor = 'expmonth'>Experiation Month</label>
                        <input type = 'text' id = 'expmonth' placeholder = "Enter Month"></input>
                        <div className = 'city-zip'>
                            <div className = "stack">
                                <label htmlFor = 'expyear'>State</label>
                                <input type = 'text' id = 'expyear' placeholder = "1900"></input>
                            </div>
                            <div className = "stack">
                                <label htmlFor = 'cvv'>Last Name</label>
                                <input type = 'text' id = 'cvv' placeholder = '123'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <button><FontAwesomeIcon icon = {faShoppingCart} className='checkout-cart-icons'/> Complete Purchase</button>    
            </form>
            <SideShoppincCart cartItems = {cartItems}/>
        </section> 
    )
}
