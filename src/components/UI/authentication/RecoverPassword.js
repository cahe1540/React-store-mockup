import React from 'react'

export const RecoverPassword = () => {
    return (
        <section className="recover-password">
             <form className = 'recover-form'>
                <p>Enter the email associated with your account to send a recovery code to your email address. Submit the code to the following form to update your password.</p>
                <label htmlFor = "email">Enter your Email Address</label>
                <input type= 'text' placeholder = "Enter your email"/>
                <button>Send Code</button>
            </form>
        </section>
    )
}
