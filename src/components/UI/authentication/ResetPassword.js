import React from 'react'

export const ResetPassword = () => {
    return (
        <section className="reset-password">
            <form className = 'reset-form'>
                <h4>Reset Password</h4>
                <label htmlFor = "Password">Password</label>
                <input type= 'password' name = "password" placeholder = "Enter new password"/>
                <label htmlFor = "Confirm Password">Confirm Password</label>
                <input type = 'password' name = "Confirm Password" placeholder = "Confirm password"/>
                <button>Reset Password</button>
            </form>
        </section>
    )
}
