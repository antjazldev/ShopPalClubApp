import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import env from '../../../env'
import axios from 'axios'


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { URLAPI } = env;
    console.log(URLAPI);

    const onSignInPressed = () => {
        console.log('SIGININ')
        var strurl = URLAPI + 'api/account.signin/' + username + "/" + password;
        console.log("str " + strurl)
        return axios.get(strurl)
            .then((res) => {
                console.log(res.data)
                if (res.data === 'false::false') {
                    console.warn('Datos Invalidos.');
                    setUsername('');
                    setPassword('')
                } else {
                    let str = res.data;
                    var splitArr = str.split("::");
                    var IdAccount = splitArr[0];
                    var IdEntity = spliArr[1];
                    var AccountActivationPending = 0;
                    if (splitArr.length > 5) {
                        AccountActivationPending = parseInt(splitArr[5]);
                    }
                    if(AccountActivationPending = 5)
                    {
                        console.warn('Aún no has completado la activación de tu cuenta.Por favor revisa el correo que te enviamos.')
                    }
                    else{
                        navigation.navigate('HomeScreen');
                    }


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