import React from "react";

export const MapConfContext = React.createContext();

export const MapConfProvider = props => {
    const [mapConf, setMapConf] = React.useState({ lat: 1.286920, lng: 103.854570, zoom: 15, mapWidth: '0vh' });

    // React.useEffect(function () {
    //     const elMapBox = document.querySelector('#map')
    //     if (elMapBox != null) elMapBox.style.setProperty('width', 'calc(100% - ' + mapConf.mapWidth + ')')
    // }, [mapConf])


    return (
        <MapConfContext.Provider value={[mapConf, setMapConf]}>
            {props.children}
        </MapConfContext.Provider>
    )
}