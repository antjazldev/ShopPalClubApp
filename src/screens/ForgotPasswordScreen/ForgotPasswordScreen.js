import React, {useState} from 'react'
import {View,Text,Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const ForgotPasswordScreen  = () => { 
    const [email,setEmail] = useState('');

    const onSendRequestPassword = () => {
        console.warn("Reset");
    }

    const onBackToSignInPressed = () => {
        console.warn("Back to sign in");
    }
    return(
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Resetear contraseña</Text>
            <CustomInput placeholder="Ingresa tu email" value={email} setValue={setEmail} secureTextEntry={false}/>
            <CustomButton text="Enviar" onPress={onSendRequestPassword} type="PRIMARY"/>
            <CustomButton
            text="Regresar a iniciar sesión"
            onPress={onBackToSignInPressed}
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
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#051C60',
        margin:10
    },
    text:{
        color:'gray',
        marginVertical:10
    },
    link:{
        color:'#FDB075'
    }

})
export default ForgotPasswordScreen