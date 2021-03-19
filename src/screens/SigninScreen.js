import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.signin}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm 
                header="Sign In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
           />
            <NavLink
                text="Do not have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );
}
 SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles =StyleSheet.create({
    signin: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    goto: {
        marginLeft: 20,
        color: 'rgb(0,70,255)',
        marginTop: 16
    }
})

export default SigninScreen