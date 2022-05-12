import React, {useState} from 'react'
import {View,Text,Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'

const SignInScreen  = () => { 
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
       
        navigation.navigate('HomeScreen');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    const onRegisterPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    return(
        <ScrollView>
        <View style={styles.root}>
            <Image source={Logo}
                   style={[styles.logo,{height: height * 0.3}]}
                   resizeMode="contain"/>
            <CustomInput placeholder="Ingresa tu email" value={username} setValue={setUsername} secureTextEntry={false}/>
            <CustomInput placeholder="Ingresa tu contraseña" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="Entrar" onPress={onSignInPressed} type="PRIMARY"/>
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
root:{
    alignItems:'center',
    padding: 20,

},    
logo:{
    width:'90%',
    maxHeight:200,
    maxWidth:300
}

})
export default SignInScreen