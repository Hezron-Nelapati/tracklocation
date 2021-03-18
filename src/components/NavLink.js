import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName  }) => {
    return (
        <TouchableOpacity
            onPress={() => {navigation.navigate(routeName)}}
        >
        <Text style={styles.goto}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goto: {
        marginLeft: 20,
        color: 'rgb(0,70,255)',
    }
})

export default withNavigation(NavLink)