import React from "react";

export default function MatchMe({user}){
	return (
		<div className='match-me'>
			<h1>Match-me</h1>
            <h1>@ {user.uid}</h1>
        </div>
	);
}