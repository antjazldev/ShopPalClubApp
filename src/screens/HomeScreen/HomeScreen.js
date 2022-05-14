import React from 'react';
import {View,Text} from 'react-native';

import { UserContext } from '../../../context/userContext';
import CustomWebView from '../../components/CustomWebView/CustomWebview';

const HomeScreen = () =>{


    const { user, login, logout } = React.useContext(UserContext);

    console.log('HOLA '+JSON.stringify(user));
    return    (<CustomWebView url='https://google.com'/>

    )
}
export default HomeScreen