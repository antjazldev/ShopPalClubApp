import React, { Component, useRef, useState } from 'react';
import { View, Text, Alert, StyleSheet, Pressable } from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import Icon from 'react-native-ico-material-design'
import { WebView } from 'react-native-webview'
import { UserContext } from '../../../context/userContext';
const CustomBrowser = ({ navigation, route }) => {

    const [mainUrl, setMainUrl] = useState(route.params.mainUrl);
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);
    const { user, login, logout } = React.useContext(UserContext);
    
    state = {
        url: mainUrl,
        key: 1
    };

    const [key, setKey] = useState(1);

    let WebViewRef;

      onNavigationStateChange = (navState) => {
        this.setState({
          canGoBack: navState.canGoBack
        });
      };

      onBack = () => {
        WebViewRef && WebViewRef.goBack();
      }

      onForward = () => {
        WebViewRef && WebViewRef.goForward();
      }

      onAddToCart = () => {
        if(Object.keys(user).length == 0)
        {
            Alert.alert(
                "Inicia Sesion",
                "Para poder añadir items a tu carrito por favor inicia sesión.",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
        else
        {
        }
      }

      onShowCart = () => {
        if(Object.keys(user).length == 0)
        {
            Alert.alert(
                "Inicia Sesion",
                "Para poder ingresar a tu carrito de compras, por favor inica sesión.",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
        else
        {
        }
      }
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
                    onNavigationStateChange={navState => {
                        setCanGoBack(navState.canGoBack);
                        setCanGoForward(navState.canGoForward);
                        setMainUrl(navState.url);
                      }}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => {
                        console.log('Reseting url');
                        setMainUrl('https://shoppalclub.com/htmlpage.html');
                        }} style={styles.IconBehave}>
                        <Icon name="front-store" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={() => {
                        { WebViewRef && WebViewRef.reload(); }
                    }} style={styles.IconBehave}>
                        <Icon name="refresh-button-1" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={this.onBack.bind(this)} style={styles.IconBehave}>
                        <Icon name="left-arrow-key" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={this.onForward.bind(this)} style={styles.IconBehave}>
                        <Icon name="keyboard-right-arrow-button-1" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={this.onAddToCart.bind(this)} style={styles.IconBehave}>
                        <Icon name="add-plus-button" height='100%' width='25' color="#d5691b" />
                    </Pressable>
                    <Pressable onPress={this.onShowCart.bind(this)} style={styles.IconBehave}>
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