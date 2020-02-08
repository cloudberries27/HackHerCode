import React from 'react';

export default function Header({loggedIn, logoutFunction}){
    return(
        <header>
            {/* <img src={Logo} alt='logo'/> */}
            <nav>
                {loggedIn && <a onClick={() =>logoutFunction()}>Log Out</a>}
                {loggedIn && <a href='/'>Home</a>}
                {!loggedIn &&<a href='/login'>Login</a>}
                {!loggedIn && <a href='/sign-up'>Sign Up</a>}
            </nav>
        </header>
    )
}