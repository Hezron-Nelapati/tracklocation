import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from './Spacer'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const { state: {name, recording, locations},
         startRecording, stopRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
    return (
        <>
            <Input 
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='Enter a Track name'
                onChangeText = {changeName}
                value={name}
            />
            <Spacer>
                { !recording ?
                    <Button 
                    title='Record'
                    onPress={startRecording}
                    /> :
                    <Button 
                    title='Stop Recording'
                    onPress={stopRecording}
                    />
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length ?
                    <Button 
                    title='Save Recording'
                    onPress={saveTrack}
                    />
                    :
                    null
                }
            </Spacer>
        </>
    );
}

export default TrackForm;