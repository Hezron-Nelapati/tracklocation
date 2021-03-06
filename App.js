import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreate';
import TrackListScreen from './src/screens/TrackList';
import TrackDetailScreen from './src/screens/TrackDetail';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { Feather } from '@expo/vector-icons'

const trackListFlow =  createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
},{})

trackListFlow.navigationOptions = () => {
  return {
    title: 'Tracks',
    tabBarIcon: <Feather name='map' color='black' size={24} />
  }
}
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,

  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  },{}),
  
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  },{})
},{})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={ (navigator) => {setNavigator(navigator)} }/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
    
  );
}