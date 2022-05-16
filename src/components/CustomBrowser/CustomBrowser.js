import React, { Component, useRef, useState} from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import CustomWebView from '../CustomWebView/CustomWebview'
import Icon from 'react-native-ico-material-design'
import { WebView } from 'react-native-webview'

const CustomBrowser=()=> {
    mainUrl = "https://shoppalclub.com/htmlpage.html";
    state = {
        url: this.mainUrl,
        key:1
    };

    const [key, setKey] = useState(1);

    let WebViewRef;
    goBack = () => {
        this.webview.goBack();
      };

    return (
        <View style={styles.container}>

            <View style={styles.contentContainer}>

                <WebView
                     ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
                     key={key}
                    source={{ uri: this.state.url }}
                    onLoad={
                        e => {
                            // Update the state so url changes could be detected by React and we could load the mainUrl.
                            this.state.url = e.nativeEvent.url;
                        }
                    }
                    javaScriptEnabled={true}
                    onError={(event => alert(`WebView error ${event.nativeEvent.description}`))}
                    startInLoadingState={true}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => setKey(key + 1)} style={styles.IconBehave}>
                        <Icon name="front-store" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={() => {
                        { WebViewRef && WebViewRef.reload(); }
                    }} style={styles.IconBehave}>
                        <Icon name="refresh-button-1" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={() => console.log('third')} style={styles.IconBehave}>
                        <Icon name="left-arrow-key" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={() => console.log('Fourth')} style={styles.IconBehave}>
                        <Icon name="keyboard-right-arrow-button-1" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={() => console.log('Fifth')} style={styles.IconBehave}>
                        <Icon name="add-plus-button" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={() => console.log('Sixth')} style={styles.IconBehave}>
                        <Icon name="shopping-cart" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    titleWrapper: {

    },
    inputWrapper: {

    },
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
    footer: {

        alignItems: 'center',
        height: '8%'
    },
    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#304664',
        justifyContent: 'space-evenly'
    },
    IconBehave: {
        padding: '5.3%'
    }

})

export default CustomBrowser