import React from "react";

import SignUpForm from "../Components/SignUpForm";

export default function SignUp({signupFunction}){
    return(
        <div className='welcome'>
            <h1>Sign Up</h1>
            <div className='login-page'>
                <SignUpForm submitFunction = {signupFunction}/>
            </div>
        </div>
    );
}