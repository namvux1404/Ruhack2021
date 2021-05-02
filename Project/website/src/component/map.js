import React, {Component, useState} from 'react'
import '../App.css';
import './map.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//Source d'adresse : https://santemontreal.qc.ca/population/coronavirus-covid-19/vaccination/sites-vaccinations/#c51829

const mapStyles ={
    width : '95%',
    height : '90%',
    margin: '2rem 2rem 2rem 2rem',
    textAlign : 'center',
}

export class MapContainer extends Component {

    state = {
        showingInfoWindow : false,
        activeMarker: {},
        selectedPlace: {},
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

    constructor(props) {
        super(props);
    
        //tableau des endroits de vaccination
        this.state = { 
          stores: [{lat : 45.494820, lng : -73.644750},         //Arena Bill-Durnan
                  {lat: 45.490920, lng: -73.650860},            //Carre Decarie
                  {lat: 45.522950, lng: -73.619820},            //MIL campus UdeM
                  {lat: 45.460110, lng: -73.658920},            //Ecole Mountainview
                  {lat: 45.50394, lng: -73.55959},             //Palais des Congres
                  {lat: 45.50428, lng: -73.55985},            //Stationnement Quartier International
                  {lat: 45.52099, lng: -73.55893},            //CLSC de la Visititaion
                  {lat: 45.48126, lng: -73.56510},            //Site vaccination Poinne-Saint-Charles
                  {lat: 45.58530, lng: -73.59877},            //Arena Martin-Brodeur
                  {lat: 45.55768, lng: -73.55158},            //Atrium du State Olympique
                  {lat: 45.64100, lng: -73.49032},            //Centre Roussin
                  {lat: 45.53668, lng: -73.69715},            //Clinique vaccin Cartierville
                  {lat: 45.60466, lng: -73.61781},            //Clinique vaccin Montreal-Nord
                  {lat: 45.54382, lng: -73.61462},            //Clinique vaccin Christophe-Colomb
                  {lat: 45.51449, lng: -73.67541},            //Clinique vaccin Saint-Laurent
                  {lat: 45.44957, lng: -73.81410},            //Arena Bob Birnie
                  {lat: 45.48374, lng: -73.80803},            //Centre civique Dollard-des-Ormeaux
                  {lat: 45.42404, lng: -73.62922},            //Centre sportif Dollard-St-Laurent
                  {lat: 45.50469, lng: -73.78452},            //Centre communautaire Gerry-Robertson
                  {lat: 45.49667, lng: -73.58888},            //Centre Uni de sante McGill - Hopital general de Montreal
                  {lat: 45.47282, lng: -73.60071}]            //Centre uni de sante McGill


        }
    }   
    
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.lat,
                lng: store.lng
            }}
            onClick={this.onMarkerClick}
            name={'Kenyatta International Convention Centre'}
            />
        
        })
    }

    render() {
      return (
        <Map
          google={this.props.google}
          zoom={11.5}
          style={mapStyles}
          initialCenter={
            {
              lat: 45.509060,
              lng: -73.553360
            }
          }
        >
            {this.displayMarkers()}
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            >
            <div>
                <h4>ALOOOO</h4>
            </div>
            </InfoWindow>
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBZ5423_dPt_3KwZb_-z7oH7WfTfC_6s8g'
  })(MapContainer);

