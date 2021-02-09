import * as React from 'react';
import { Button, View, Text, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { observer } from 'mobx-react';

import Styles from '../styles';
import AuthStore from '../stores/AuthStore';
import {FontAwesome5, AntDesign} from "@expo/vector-icons";

function LogInScreen({navigation}) {

  return (
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <ImageBackground source= {require('../assets/login_3.png')}
       style={[Styles.BackgroundImage]}>
        <View style={[Styles.Pannel]}>
          <Text style= {Styles.Title}>LogIn</Text>
          <KeyboardAvoidingView>
            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="user-alt" size={24} color="black" style={{paddingTop:8,paddingRight:4}} />
              <TextInput
                placeholder="Username"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => AuthStore.inputs.username = text}
              />
            </View>

            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="key" size={24} color="black" style={{paddingTop:8,paddingRight:4}}/>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={[Styles.Input, AuthStore.errors.password && Styles.InputError,{flex:1}]}
                onChangeText={text => AuthStore.inputs.password = text}
              />
            </View>
            <Button onPress={AuthStore.logIn} title="LogIn" color='#FFCC00'/>
            { AuthStore.error && <View style={Styles.ErrorMsgWrap}>
              <AntDesign name="closecircle" size={18} color="black" />
              <Text style={Styles.ErrorMsg}>{AuthStore.error}</Text>
            </View>}

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