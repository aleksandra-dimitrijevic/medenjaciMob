import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';

import AuthStore from './stores/AuthStore';
import LogInScreen from './Screens/LogInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';


const ScreenNames = {
  HOME : 'Home',
  LOGIN: 'LogIn',
  REGISTER: 'Register',
  PRODUCTS: 'Products',
  CART: 'Cart',
  PROFILE : 'Profile',
  CHANGE_PASSWORD: 'ChangePassword'
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {AuthStore.isLoggedIn && (
          <>
            <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
          </>
        )}

        {!AuthStore.isLoggedIn && (
          <>
            <Stack.Screen name={ScreenNames.LOGIN} component={LogInScreen} />
            <Stack.Screen name={ScreenNames.REGISTER} component={RegisterScreen} />
          </>
        )} 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default observer(App);




