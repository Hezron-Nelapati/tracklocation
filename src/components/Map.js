import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext'
const Map = () => {
    const { state } = useContext(LocationContext)
    console.log(`${state} --- ${state.currentLocation}`)
    const currentLocation = state.currentLocation

    if(!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 250 }} />
    }
    console.log(state)
    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                //17.4707751,78.3587426,11z
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}

            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle 
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(0,158,255,1.0)"
                fillColor="rgba(0,158,255,0.3)"
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map