import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    
    return (
        <View style={styles.trackList}>
            <NavigationEvents 
                onWillFocus={fetchTracks}
            />
            
            <FlatList
                data={state}
                keyExtractor={ item => { item._id }}
                renderItem={({ item }) => {
                    console.log(item)
                    return (
                        <>
                            <TouchableOpacity onPress={ () => {
                                    navigation.navigate('TrackDetail', { _id: item._id } 
                                    )} }>
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title style={{ fontSize: 18 }}>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron color='black'/>
                                </ListItem>
                            </TouchableOpacity>
                        </>
                    );
                }}
            />
        </View>
    );
}

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracker App'
    }
}

const styles =StyleSheet.create({
    trackList: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default TrackListScreen