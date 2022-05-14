import React from 'react'
import {View,Text, StyleSheet, TextInput} from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import {WebView} from 'react-native-webview'

const CustomWebView  = ({url}) => { 
        return(
            <WebView 
            source = {{uri:url}}
            onError = {(event => alert(`WebView error ${event.nativeEvent.description}`))}
        />
    )
}

export default CustomWebView