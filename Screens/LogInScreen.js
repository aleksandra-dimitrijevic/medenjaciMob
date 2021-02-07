import * as React from 'react';
import { Button, View, Text, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { observer } from 'mobx-react';

import Styles from '../styles';
import AuthStore from '../stores/AuthStore';

function LogInScreen({navigation}) {
  return (
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <ImageBackground source= {require('../assets/login_3.png')}
       style={[Styles.BackgroundImage]}>
        <View style={[Styles.Pannel]}>
          <Text style= {Styles.Title}>LogIn</Text>
          <KeyboardAvoidingView>
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
            <Button onPress={AuthStore.logIn} title="LogIn" color='#FFCC00'/>
            <Text style={Styles.Link}
                  onPress={() => navigation.navigate('Register')}>
              Register?
            </Text>
          </KeyboardAvoidingView>

        </View>
      </ImageBackground>
    </View>
  );
}

export default observer(LogInScreen);