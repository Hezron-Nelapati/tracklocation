import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);


    return (
        <View style={styles.signup}>
            <AuthForm 
                header="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
           />
            <NavLink 
                text="Already have an account? Sign in instead"
                routeName="Signin"
            />
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles =StyleSheet.create({
    signup: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})

export default SignupScreen