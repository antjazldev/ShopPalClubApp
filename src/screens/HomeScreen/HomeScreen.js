import 'react-native-gesture-handler';
import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserContext } from '../../../context/userContext';
import CustomWebView from '../../components/CustomWebView/CustomWebview';
import CustomBrowser from '../../components/CustomBrowser/CustomBrowser';

const Drawer = createDrawerNavigator();

const HomeScreen = () =>{


    
    return    (<CustomWebView></CustomWebView>)
}
export default HomeScreen