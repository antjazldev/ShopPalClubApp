import React from 'react';
import {View,Text} from 'react-native';
import {WebView} from 'react-native-webview'
import { UserContext } from '../../../context/userContext';

const HomeScreen = () =>{


    const { user, login, logout } = React.useContext(UserContext);

    console.log('HOLA '+JSON.stringify(user));
    return     <WebView 
        source = {{uri:'https://shoppalclub.com/htmlpage.html'}}
        onError = {(event => alert(`WebView error ${event.nativeEvent.description}`))}
    />
}
export default HomeScreen