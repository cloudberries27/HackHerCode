import React from "react";

import LoginForm from "../Components/LoginForm";

export default function Login({loginFunction}) {
    return (
        <div className='welcome'>
            <h1>Welcome</h1>
            <div className='login-page'>
                <LoginForm submitFunction = {loginFunction}/>
            </div>
        </div>
    );
}