import React from 'react'
import '../../App.css';
import Map from '../map';
import InfoSectionHome from '../InfoSectionHome';
import DataMap from '../dataMap';
import '../map.css';
//import { Map, GoogleApiWrapper } from 'google-maps-react';

function Home () {
    return (
        <>
            <InfoSectionHome />
            
            <div>
                <Map />
            </div>
        </>
    )
}

export default Home;

