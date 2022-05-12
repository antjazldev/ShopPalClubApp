import React from 'react'
import {View,Text,Image, StyleSheet, Pressable} from 'react-native'
import Logo from '../../../assets/imgs/spclogo.png'

const CustomButton  = ({onPress,text,type,bgColor,fgColor}) => { 
        return(
        <Pressable onPress={onPress} 
        style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? {backgroundColor:bgColor} : {} 
             ]}>
            <Text 
            style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? {color:fgColor} : {}
                ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
       
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:10

    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',

    },
    container_TERTIARY:{

    },
    text:{
        fontWeight:'bold',
        color:'white'
    },
    text_TERTIARY:{
        color:'grey'
    },


})
export default CustomButton