import React from 'react'

export default function Login({submitFunction}){
    return (
        <div className='login-comp'>
            <form onSubmit={e=>submitFunction(e)}>
                <label htmlFor='loginEmail'> Email </label>
                <input type='email' name='loginEmail' placeholder='email'/>
                <label htmlFor='loginPassword'> Password </label>
                <input type='password' name='loginPassword' placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}