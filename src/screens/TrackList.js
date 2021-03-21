import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext'
const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    return (
        <View style={styles.trackList}>
            <NavigationEvents 
                onWillFocus={fetchTracks}
            />
            <Text style={{ fontSize: 20 }}>TrackListScreen</Text>
        </View>
    );
}

const styles =StyleSheet.create({
    trackList: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default TrackListScreen