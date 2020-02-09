import React from "react";
import Map from '../Components/Map';
import GoogleMaps from '../Components/GoogleMaps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function UserProfile({user}){
	return (
		<div className='user-profile'>
            <img alt='icon' className='pfp' src='https://cdn.onlinewebfonts.com/svg/img_568656.png'></img>
            <h1> @ {user.uid}</h1>
            <Tabs className="tabs">
                <TabList className='tab-name'>
                    <Tab>Maps</Tab>
                    <Tab>Friends</Tab>
                </TabList>

                <TabPanel className='tab-content'>
                    <Map/>
                    <div className='googlemaps'>
                        <GoogleMaps/>   
                    </div>
                </TabPanel>
                <TabPanel className='tab-content'>
                    <h3> Friends </h3>
                </TabPanel>
            </Tabs> 
            <div className='buttons'>
                <a href='/match-me'><button> Match Me! </button></a>
                <a href='/'><button> Text Location </button></a>
                <a href='/'><button> Emergency </button></a>
            </div>

        </div>
	);
}