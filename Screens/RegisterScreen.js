import * as React from 'react';
import { Button, View, Text, TextInput, ImageBackground } from 'react-native';
import { observer } from 'mobx-react';

import Styles from '../styles';
import AuthStore from '../stores/AuthStore';

function RegisterScreen({navigation}) {
  return (
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <ImageBackground source= {require('../assets/login_3.png')}
       style={[Styles.BackgroundImage]}>
        <View style={[Styles.Pannel]}>
          <Text style= {Styles.Title}>Register</Text>
          <View>
            <TextInput 
              placeholder="First Name"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.firstName = text}
            />
            <TextInput 
              placeholder="Last Name"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.lastName = text}
            />
             <TextInput 
              placeholder="Phone Number"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.phoneNumber = text}
            />
             <TextInput 
              placeholder="Address"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.address = text}
            />
            <TextInput 
              placeholder="Username"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.username = text}
            />

            <TextInput 
              placeholder="Password"
              style={[Styles.Input, AuthStore.errors.password && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.password = text}
            />
            <TextInput 
              placeholder="Repeat password"
              style={[Styles.Input, AuthStore.errors.password && Styles.InputError]}
              onChangeText={text => AuthStore.inputs.repeatedPassword = text}
            />
            <Button onPress={AuthStore.register} title="Register" color='#FFCC00'/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default observer(RegisterScreen);