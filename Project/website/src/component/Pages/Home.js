import React from 'react'
import '../../App.css';
import Map from '../map';
import InfoSectionHome from '../InfoSectionHome';
import '../map.css';
//import { Map, GoogleApiWrapper } from 'google-maps-react';

function Home () {
    return (
        <>
            <InfoSectionHome />
            <Map />
            
            
        </>
    )
}

export default Home;

/*import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
const mapStyles ={
    width : '80%',
    height : '80%',
    //align : left,
}

export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 45.509060,
              lng: -73.553360
            }
          }
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBZ5423_dPt_3KwZb_-z7oH7WfTfC_6s8g'
  })(MapContainer);
*/
/*
function Home () {
    return (
        <>
            <Map />;
        </>
    )
}

export default Home;


function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 45.509060, lng : -73.553360}} 
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Home() {
    return (
        <div>
            <WrappedMap googleMapURL={``} />
        </div>
    )
}
*/
