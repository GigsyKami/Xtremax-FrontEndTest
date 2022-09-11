import React from "react";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { OffCanvasContext } from "./OffCanvasProvider";
import axios from "axios";

export default function Map() {

    const [locations, setLocations] = React.useState([])
    const [offCanvasForm, setOffCanvasForm] = React.useContext(OffCanvasContext)
    const [mapConf, setMapConf] = React.useState({ lat: 1.286920, lng: 103.854570, zoom: 15 });

    function seeMapDetail(props) {
        // this function triggered when map pin is clicked 

        // change all map data
        setOffCanvasForm({ refMapId: props.id, refMapTitle: props.title, refMapSubTitle: props.subTitle, refMapDescription: props.description, refMapAddress: props.address, refMapWebsite: props.website, refMapImg: props.img, refMapClass: '', mapWidth: '18vw' })

        // change map center & zoom level when click a pin
        setMapConf({ lat: props.lat, lng: props.lng, zoom: 17 })
    }

    const apiIsLoaded = (map) => {
        // https://stackoverflow.com/a/38487961
        // use this answer to disabled click icon on google map
        // delete arg maps, places

        map.setClickableIcons(false)
    }

    const Marker = props => {
        // https://stackoverflow.com/a/49780294
        // need the code for adding marker to the map
        // add my own component

        return (<div className={"map-pin d-flex align-items-center selected-locc-" + props.id} onClick={seeMapDetail.bind(this, props)}>
            <FontAwesomeIcon icon={solid('map-marker-alt')} className="fa-4x me-1" />
            <div className="detail">
                <p className="m-0">{props.title}</p>
                <p className="m-0 address">{props.address}</p>
            </div>
        </div >)
    }

    React.useEffect(function () {
        // fetch data from /public/dataLocation.json
        axios.get('./dataLocation.json').then(function (data) {
            setLocations(data.data)
        }).catch(function (error) {
            alert(error);
        })
    }, [])

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '93vh' }} id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBC9xDiLTegO1ODmu5K4IpsHp3WX3vNP8k" }}
                center={{ lat: mapConf.lat, lng: mapConf.lng }} // center is a bit to the right because i use position:absolute on detail map
                zoom={mapConf.zoom}
                onGoogleApiLoaded={({ map }) => apiIsLoaded(map)}>

                {locations.map(function (val) {
                    return <Marker key={val.id} id={val.id} lat={val.lat} lng={val.lng} title={val.title} subTitle={val.subtitle} description={val.description} address={val.address} website={val.website} img={val.img} />
                })}
            </GoogleMapReact>
        </div >
    );
}