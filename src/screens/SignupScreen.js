import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'white'}}>
            <View style={styles.containerStyle}>
                <Text h3>Sign Up for Tracker</Text>
                <Spacer />
                <Spacer />
            <Input 
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
            />
            <Input
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
            />
            <Spacer>
                <Button 
                    title="Sign Up"
                    onPress={() => {
                        console.log('pressed')
                    }}
                />
            </Spacer>
            </View>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles =StyleSheet.create({
    containerStyle: {
        marginTop: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 0.5
    }
})

export default SignupScreen