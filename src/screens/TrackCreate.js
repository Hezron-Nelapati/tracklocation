import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
// import '../_mockLocation';
import { Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import CustomSpacer from '../components/CustomSpacer'
import { Feather } from '@expo/vector-icons'


const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, state.recording)
    }, [state.recording])
    const [err] = useLocation( isFocused || state.recording, callback )

    return (
        <SafeAreaView forceInset={{top: 'always'}} style={{paddingHorizontal: 5, marginTop: 20}}>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <CustomSpacer 
                vertical={100}
                horizontal={20}
            >
                <TrackForm />
            </CustomSpacer>
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Add Track',
        tabBarIcon: <Feather name="plus" size={24} />
    }
}
const styles =StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)

