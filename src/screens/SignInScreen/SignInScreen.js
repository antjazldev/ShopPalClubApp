import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '././../../../context/userContext'
import axios from 'axios'
import env from '../../../env';
const { URLAPI } = env;



const SignInScreen = () => {
    const [username, setUsername] = useState('antjazl@gmail.com');
    const [password, setPassword] = useState('Luch!n159');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const { user, login, logout } = React.useContext(UserContext);


    const onSignInPressed = () => {
        var strurl = URLAPI + 'api/account.signin/' + username + "/" + password;
        axios.get(strurl)
            .then((res) => {
                //console.log(res.data)
                if (res.data === 'false::false') {
                    console.warn('Datos Invalidos.');
                    setUsername('');
                    setPassword('')
                } else {
                    let str = res.data;
                    console.log(str);
                    var splitArr = str.split("::");
                    const entries = new Map([
                        ['IdAccount', splitArr[0]],
                        ['IdEntity', splitArr[1]],
                        ['ClientName', splitArr[2]],
                        ['ClientEmail', splitArr[3]],
                        ['IsActive', splitArr[4]]
                      ]);
                      const obj = Object.fromEntries(entries);
                      console.log('XXX: ' + JSON.stringify(obj))
                       login(obj);

                       navigation.navigate('HomeScreen')

                       
                    
                      

                }
            }).catch((error) => {
                console.error(error);
            });
            
        
        

    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    const onRegisterPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain" />
                <CustomInput placeholder="Ingresa tu email" value={username} setValue={setUsername} secureTextEntry={false} />
                <CustomInput placeholder="Ingresa tu contraseña" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Entrar" onPress={onSignInPressed} type="PRIMARY" />
                <CustomButton
                    text="¿Todavía no eres miembro?"
                    onPress={onRegisterPressed}
                    type="TERTIARY"
                />
                <CustomButton
                    text="¿Olvidaste tu contraseña?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '90%',
        maxHeight: 200,
        maxWidth: 300
    }

})
export default SignInScreen