import React from 'react';
import {View,Text} from 'react-native';
import {WebView} from 'react-native-webview'

const HomeScreen = () =>{
    return     <WebView 
        source = {{uri:'https://shoppalclub.com/htmlpage.html'}}
        onError = {(event => alert(`WebView error ${event.nativeEvent.description}`))}
    />
}
export default HomeScreen