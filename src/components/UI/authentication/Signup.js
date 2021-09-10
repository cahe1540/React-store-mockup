import React from 'react'

export const Signup = () => {
    return (
        <section className = "signup-section">
            <div className= 'signup'>
                <form>
                    <h1>Register</h1>
                    <label htmlFor="text">Name</label>
                    <input type = "text"></input>
                    <label htmlFor="text">Email</label>
                    <input type = "text"></input>
                    <label htmlFor= "password">Password</label>
                    <input type = "password"></input>
                    <label htmlFor= "passwordConfirmed">Confirm Password</label>
                    <input type = "password"></input>
                    <button>Register</button>
                </form>
            </div>
        </section>
    )
}
