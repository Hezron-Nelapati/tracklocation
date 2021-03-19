import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.account} forceInset={{top: 'always'}}>
            <Text style={styles.label}>Account screen</Text>
           <Spacer>
                <Button 
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
}

const styles =StyleSheet.create({
    account: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        // borderWidth: 1,
        marginTop: 25
    },
    label: {
        fontSize: 30,
        marginHorizontal: 20,
        fontWeight: '300',
        top: 30,
        position: 'absolute'
    }
})

export default AccountScreen