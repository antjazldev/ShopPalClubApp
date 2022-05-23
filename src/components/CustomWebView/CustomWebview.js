import React,{useLayoutEffect, useState} from 'react'
import { Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomBrowser from './../CustomBrowser/CustomBrowser'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserContext } from '../../../context/userContext';
import SignInScreen from './../../screens/SignInScreen/'

const Drawer = createDrawerNavigator();

const CustomWebView = () => {

        const { user, login, logout } = React.useContext(UserContext);
        const [ currentUser, setCurrentUser] = useState({});
        const [isLoading, setLoading] = useState(true);
        console.log('USER LINE 0: ' + JSON.stringify(user))
        const getData = async () => {
                try {
                        console.log('1')
                        const jsonValue = await AsyncStorage.getItem('@user')
                        console.log('2')
                        console.log('async storage user: '+jsonValue);
                        if(jsonValue != null)
                        {
                                
                                const objusr = JSON.parse(jsonValue);
                                console.log('WORKING')
                                
                                console.log('loaded user + '+ JSON.stringify(objusr));
                                login(objusr);
                                setLoading(false);
                                
                        }
                } catch (e) {
                        // error reading value
                }
        }

        useLayoutEffect(() => {
                getData();
              },[]);

        console.log('3')
        if(isLoading) { return <Text>Loading...</Text> };
        if (Object.keys(user).length > 0) {
                console.log('4')
                return (
                        <Drawer.Navigator>
                                <Drawer.Screen name="Home" component={CustomBrowser} initialParams={{ mainUrl: 'https://shoppalclub.com/htmlpage.html' }} />
                                <Drawer.Screen name="Profile" component={CustomBrowser} initialParams={{ mainUrl: "https://google.com" }} />
                                <Drawer.Screen name="Orders" component={CustomBrowser} initialParams={{ mainUrl: "https://9gag.com" }} />
                        </Drawer.Navigator>
                )
        }
        else {

                console.log('aqui')
                return (
                        <Drawer.Navigator>
                                <Drawer.Screen name="Home" component={CustomBrowser} initialParams={{ mainUrl: 'https://shoppalclub.com/htmlpage.html' }} />
                                <Drawer.Screen name="Inicia Sesion" component={SignInScreen} />
                        </Drawer.Navigator>
                )
        }
}

export default CustomWebView