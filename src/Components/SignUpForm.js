import React from 'react'

export default function SignUp({submitFunction}){
    return (
        <div className='login-comp'>
            <form onSubmit={e=>submitFunction(e)}>
                <label htmlFor='createEmail'> Enter Email </label>
                <input type='email' name='createEmail' placeholder='Email'/>
                <label htmlFor='createPassword'> Create Password </label>
                <input type='password' name='createPassword' placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}