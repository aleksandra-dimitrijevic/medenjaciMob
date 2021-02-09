import * as React from 'react';
import {Button, View, Text, TextInput, ImageBackground, KeyboardAvoidingView} from 'react-native';
import { observer } from 'mobx-react';

import Styles from '../styles';
import AuthStore from '../stores/AuthStore';
import {AntDesign, FontAwesome, FontAwesome5} from "@expo/vector-icons";

function RegisterScreen({navigation}) {
  return (
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <ImageBackground source= {require('../assets/login_3.png')}
       style={[Styles.BackgroundImage]}>
        <View style={[Styles.Pannel]}>
          <Text style= {Styles.Title}>Register</Text>
          <View>
            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="user-alt" size={24} color="black" style={{paddingTop:8,paddingRight:4}} />
              <TextInput
                placeholder="First Name"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => AuthStore.inputs.firstName = text}
              />
            </View>

            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="user-alt" size={24} color="black" style={{paddingTop:8,paddingRight:4}} />
              <TextInput
                placeholder="Last Name"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => AuthStore.inputs.lastName = text}
              />
            </View>

            <View style={{flexDirection:'row'}}>
              <FontAwesome name="phone" size={32} color="black" style={{paddingTop:8,paddingRight:4}} />
               <TextInput
                placeholder="Phone Number"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => AuthStore.inputs.phoneNumber = text}
              />
            </View>

            <View style={{flexDirection:'row'}}>
              <FontAwesome name="home" size={26} color="black" style={{paddingTop:8,paddingRight:4}}/>
               <TextInput
                placeholder="Address"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => AuthStore.inputs.address = text}
              />
            </View>

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
              secureTextEntry={true}
              placeholder="Password"
              style={[Styles.Input, AuthStore.errors.password && Styles.InputError,{flex:1}]}
              onChangeText={text => AuthStore.inputs.password = text}
            />
            </View>
            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="key" size={24} color="black" style={{paddingTop:8,paddingRight:4}}/>
            <TextInput
              secureTextEntry={true}
              placeholder="Repeat password"
              style={[Styles.Input, AuthStore.errors.password && Styles.InputError,{flex:1}]}
              onChangeText={text => AuthStore.inputs.repeatedPassword = text}
            />
            </View>
            <Button onPress={AuthStore.register} title="Register" color='#FFCC00'/>

            { AuthStore.error && <View style={Styles.ErrorMsgWrap}>
              <AntDesign name="closecircle" size={18} color="black" />
              <Text style={Styles.ErrorMsg}>{AuthStore.error}</Text>
            </View>}
            <Text style={Styles.Link}
                  onPress={() => navigation.navigate('LogIn')}>
              LogIn?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default observer(RegisterScreen);