import React, { useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomBrowser from './../CustomBrowser/CustomBrowser'
import 'react-native-gesture-handler';
import {
        createDrawerNavigator, DrawerContentScrollView,
        DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
import { UserContext } from '../../../context/userContext';
import SignInScreen from './../../screens/SignInScreen/';
import useForceUpdate from 'use-force-update';

const Drawer = createDrawerNavigator();

const CustomWebView = () => {

        const { user, login, logout } = React.useContext(UserContext);
        const [currentUser, setCurrentUser] = useState({});
        const [isLoading, setLoading] = useState(true);
        console.log('USER LINE 0: ' + JSON.stringify(user));
        const forceUpdate = useForceUpdate();
        const getData = async () => {
                try {
                        console.log('1')
                        const jsonValue = await AsyncStorage.getItem('@user')
                        if (jsonValue == null) {
                                setLoading(false);
                        }
                        console.log('2')
                        console.log('async storage user: ' + jsonValue);
                        if (jsonValue != null) {

                                const objusr = JSON.parse(jsonValue);
                                console.log('WORKING')

                                console.log('loaded user + ' + JSON.stringify(objusr));
                                login(objusr);
                                setLoading(false);

                        }
                } catch (e) {
                        // error reading value
                }
        }

        useLayoutEffect(() => {
                getData();
        }, []);
        function AppDrawerContent(props) {
                return (
                        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
                                {/*all of the drawer items*/}
                                <DrawerItemList {...props} style={{ borderWidth: 1 }} />
                                <View style={{ flex: 1, marginVertical: 20, borderWidth: 1 }}>
                                        {/* here's where you put your logout drawer item*/}
                                        <DrawerItem
                                                label="Cerrar Sesión"
                                                onPress={() => {
                                                       // AsyncStorage.clear();
                                                        // props.navigation.replace("SignIn");
                                                        logout();
                                                        forceUpdate();
                                                        props.navigation.closeDrawer();
                                                        console.log('XXXX'+Object.keys(user).length)
                                                }}
                                                style={{ flex: 1, justifyContent: 'flex-end' }}
                                        />
                                </View>
                        </DrawerContentScrollView>
                );
        }

        console.log('3')
        if (isLoading) { return <Text>Loading...</Text> };
        if (Object.keys(user).length > 0) {
                console.log('4')
                return (
                        <Drawer.Navigator drawerContent={props => <AppDrawerContent {...props} />}>
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


