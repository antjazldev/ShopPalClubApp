import React from 'react'
import CustomBrowser from './../CustomBrowser/CustomBrowser'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomWebView  = () => { 
        return(
            <Drawer.Navigator>
                    <Drawer.Screen name="Profile" component={CustomBrowser}  initialParams={{mainUrl:"https://google.com"}} />
                    <Drawer.Screen name="Orders" component={CustomBrowser} initialParams={{mainUrl:"https://9gag.com"}}/>
            </Drawer.Navigator>
    )
}

export default CustomWebView