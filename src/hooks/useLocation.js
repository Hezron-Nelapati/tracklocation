import { useEffect, useState } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (callback) => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try{
            let {granted} = await requestPermissionsAsync()
            if(!granted){
                throw new e('Permission Denied')
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback
            )
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching()
    },[])

    return [err]
}