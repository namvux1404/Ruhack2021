import React, { useState, useEffect} from 'react'
import '../App.css';
import './InfoSectionHome.css';
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

export default InfoSectionHome;
*/

export default function InfoSectionHome() {

    const [infoList, setInfo] = useState();

    useEffect(() => {
        const userRef = firebase.database().ref('user'); //pour recuperer ref de DB

        userRef.on('value', (snapshot) => {
            const users = snapshot.val(); //get id
            const info = []; //table contain DATA
            for (let i in users ) {
                info.push ({
                    id: i,
                    nom: users[i].Nom,
                    prenom: users[i].Prenom,
                    age: users[i].Age,
                    langage: users[i].Langage,
                });
            }
            //console.log(info);
            setInfo(info);
        });

    }, []);

    console.log(infoList);
    return (
        <div className='InfoSectionHome-container'>
            {infoList ? infoList.map((infos) => (
            <div>
                <p>{infos.nom} {infos.prenom} </p>
                <p>{infos.age}</p>
            </div>
            )) : ''}
            
        </div>
    );

}