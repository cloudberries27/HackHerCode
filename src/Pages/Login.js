import React from "react";

import LoginForm from "../Components/LoginForm";

export default function Login({logInFunction}) {
    return (
        <div className='welcome'>
            <h1>Welcome</h1>
            <div className='login-page'>
                <LoginForm submitFunction = {logInFunction}/>
            </div>
        </div>
    );
}