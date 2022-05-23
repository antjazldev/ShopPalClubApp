import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native'
import { navRef } from '../src/navigation/navRef'


//const navigation = useNavigation();
// Declaring the state object globally.

const storeData = async (userdata) => {
  try {
    const jsonValue = JSON.stringify(userdata)
    await AsyncStorage.setItem('@user', jsonValue)
    console.log('funciona');
  } catch (e) {
    // saving error
  }
}

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('@user')
  } catch(e) {
    // remove error
  }

  console.log('Done deleting user.')
}


const initialUserState = {
  user: {},
};

const userContextWrapper = (component) => ({
  ...initialUserState,
  login:  (usr) => {
     // console.log('MADE IT TO UC');
     // console.log(JSON.stringify(usr))
     storeData(usr); 
     initialUserState.user = usr;

      component?.setState({ context: userContextWrapper(component) });
  },
  logout: () => {
    removeValue();
    initialUserState.user = {};
    component?.setState({ context: userContextWrapper(component) });
  },
});


export const UserContext = React.createContext(userContextWrapper());

export class UserContextProvider extends React.Component {
  state = {
    context: userContextWrapper(this),
  };

  render() {
    return (
      <UserContext.Provider value={this.state.context}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}