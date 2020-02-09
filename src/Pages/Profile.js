import React from "react";
// import * as firebase from "firebase/app";
// import UserInformation from "../../components/UserProfileComponents/index";
import Map from '../Components/Map';
import GoogleMaps from '../Components/GoogleMaps';

export default function UserProfile({user}){

	return (
		<div className='user-profile'>
			<h1>User Profile</h1>
            <h1>{user.uid}</h1>
            <Map/>
            <GoogleMaps/>
            <a href='/match-me'><button> Match Me! </button></a>
            <button> Text Location </button>
            <button> Emergency </button>
        </div>
	);
}