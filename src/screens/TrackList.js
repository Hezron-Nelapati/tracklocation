import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <View style={styles.trackList}>
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