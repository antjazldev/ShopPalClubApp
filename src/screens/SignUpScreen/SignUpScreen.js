import React, {useState} from 'react'
import {View,Text,Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const SignUpScreen  = () => { 
    
    const [nombre,setFirstName] = useState('');
    const [apellido,setLastName] = useState('');
    const [cedula,setCedula] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const {height} = useWindowDimensions();

    const onRegisterPressed = () => {
        console.warn("Joining in...");
    }

    const onSignInPressed = () => {
        console.warn("WELCOMEr...");
    }
    const onTermsOfUsePressed = () => {
        console.warn("TERMSOFUSEDPRESSED...");
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("PRIVACY POLITICS...");
    }

    return(
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Crea una cuenta</Text>
            <CustomInput placeholder="Nombre" value={nombre} setValue={setFirstName} secureTextEntry={false}/>
            <CustomInput placeholder="Apellido" value={apellido} setValue={setLastName} secureTextEntry={false}/>
            <CustomInput placeholder="Cedula de identidad" value={cedula} setValue={setCedula} secureTextEntry={false}/>
            <CustomInput placeholder="Correo electrónico" value={email} setValue={setEmail} secureTextEntry={false}/>
            <CustomInput placeholder="Contraseña" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="Repite la contraseña" value={password2} setValue={setPassword2} secureTextEntry={true}/>
            <CustomButton text="Únete" onPress={onRegisterPressed} type="PRIMARY"/>
            <CustomButton
            text="¿Ya tienes una cuenta? Inicia Sesión"
            onPress={onSignInPressed}
            type="TERTIARY"
            />
           <Text style={styles.text}>
               Registrandote, confirmas que estas de acuerdo con nuestro <Text style={styles.link} onPress={onTermsOfUsePressed}>Términos de Uso</Text>, y nuestra <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Política de Privacidad</Text>.
           </Text>
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
export default SignUpScreen