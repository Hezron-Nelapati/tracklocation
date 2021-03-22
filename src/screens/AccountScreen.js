import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.account} forceInset={{top: 'always'}}>
            <Button 
                title="Sign Out"
                onPress={signout}
            />
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions =() => {
    return {
        title: 'Account',
        tabBarIcon: <MaterialIcons name="account-circle" size={24} color="black"/>
    }
}

const styles =StyleSheet.create({
    account: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        // borderWidth: 1,
        marginTop: 25,
        padding: 30
    }
})

export default AccountScreen