import 'react-native-gesture-handler';
import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserContext } from '../../../context/userContext';
import CustomWebView from '../../components/CustomWebView/CustomWebview';

const Drawer = createDrawerNavigator();

const HomeScreen = () =>{


    const { user, login, logout } = React.useContext(UserContext);

    console.log('HOLA '+JSON.stringify(user));
    return    (<Drawer.Navigator>

    <Drawer.Screen name="Home">
      {props => <CustomWebView {...props}  url={"https://shoppalclub.com/htmlpage.html"} />}
    </Drawer.Screen>
    <Drawer.Screen name="Profile">
      {props => <CustomWebView {...props}  url={"https://google.com"} />}
    </Drawer.Screen>
    </Drawer.Navigator>

    )
}
export default HomeScreen