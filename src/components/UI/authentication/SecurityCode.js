import React from 'react'

export const SecurityCode = () => {
    return (
        <section className="recover-password">
             <form className = 'security-form'>
                <label htmlFor = "email">Enter recovery code</label>
                <input type= 'text' placeholder = "Enter security code"/>
                <button>Submit</button>
            </form>
        </section>
    )
}
