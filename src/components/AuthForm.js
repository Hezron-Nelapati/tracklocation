import React,{ useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';

const AuthForm = ({ header, errorMessage, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
        <View style={styles.containerStyle}>
                <Text h3 style={styles.label}>{header} for Tracker</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button 
                    title={header}
                    onPress={() => {
                        onSubmit({ email, password })
                    }}
                />
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 0.6,
    },
    errorMessage: {
        fontSize : 16,
        color: 'red',
        marginLeft: 40,
        marginTop: 5
    },
    label: {
        marginLeft: 15
    }
})

export default AuthForm;