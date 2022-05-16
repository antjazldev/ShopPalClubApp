import 'react-native-gesture-handler';
import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserContext } from '../../../context/userContext';
import CustomWebView from '../../components/CustomWebView/CustomWebview';
import CustomBrowser from '../../components/CustomBrowser/CustomBrowser';

const Drawer = createDrawerNavigator();

const HomeScreen = () =>{


    const { user, login, logout } = React.useContext(UserContext);

    console.log('HOLA '+JSON.stringify(user));
    return    (<CustomBrowser></CustomBrowser>

    )
}
export default HomeScreen