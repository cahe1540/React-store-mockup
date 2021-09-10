import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <section className = "login-section">
            <div className= 'login'>
                <form>
                    <label htmlFor="text">Login</label>
                    <input type = "text"></input>
                    <label htmlFor= "password">Password</label>
                    <input type = "password"></input>
                    <button>Log In</button>
                </form>
                    <Link className = 'login-help' to = '/recoverpassword'>Forgot Password?</Link>
                    <Link className = 'create-acct' to= '/signup'> Sign Up</Link>
            </div>
        </section>
    )
}
