import React, { useState, useEffect} from 'react'
import '../App.css';
import './dataMap.css';
import firebase from '../firebase';

/*
function InfoSectionHome() {

    return (
        <div className='InfoSectionHome-container'>
            <h1>Sites pour vaccination</h1>
            <p>Enter your postal code to find nearest place</p>
        </div>
    )
}
*/

function DataMap() {

    const [siteList, setSiteList] = useState([]);

    useEffect(() => {
        const siteRef = firebase.database().ref('site'); //pour recuperer ref de DB

        siteRef.on('value', (snapshot) => {
            const sites = snapshot.val(); //get id
            const info = []; //table contain DATA
            for (let i in sites ) {
                const periode = [];
                const time = sites[i].Periode;  //Section periode
                console.log(time);
                //console.log(periode1);
                for (let j in time) {
                    periode.push ({
                        date: time[j].Date,
                        volume: time[j].Volume,
                    })
                }
                console.log(periode);
                info.push ({
                    id: i,
                    lieu: sites[i].Lieu,
                    periode1: periode
                });
            }
            console.log(info);
            setSiteList([info]);
        });

    }, []);

    
    //console.log(siteList);

    
    return (
        <div>
            {siteList ? siteList.map((data) => (
            <div>
                <h2> {data[0].lieu} </h2>
                <p> DATE : {data[0].periode1[0].date} - {data[0].periode1[0].volume} </p>
                <p> DATE : {data[0].periode1[1].date} - {data[0].periode1[1].volume} </p>
                <p> DATE : {data[0].periode1[2].date} - {data[0].periode1[2].volume} </p>
            </div>
            )) : 'Donne vide'}
            
        </div>
    );
    
}

export default DataMap;