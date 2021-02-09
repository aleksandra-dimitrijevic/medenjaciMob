import * as React from 'react';
import {Button, View, Text, TextInput, ImageBackground, TouchableHighlight} from 'react-native';
import { observer } from 'mobx-react';

import Styles from '../styles';
import AuthStore from '../stores/AuthStore';
import {FontAwesome5, FontAwesome, AntDesign} from '@expo/vector-icons';


function ChangePassword(props) {

  return (
    <View style = {Styles.Modal}>
      <TouchableHighlight onPress={() => props.closeChangePass() } style={Styles.ModalBackGround}>
        <View/>
      </TouchableHighlight>
      <View style={[Styles.Pannel]}>
        <View style={Styles.TitleWrapper}>
          <Text style={Styles.TitleModal}>Promena sifre</Text>
          <AntDesign name="closecircle" size={24} color="black" onPress={() => props.closeChangePass()}/>
        </View>
        <View>
          <View style={{flexDirection:'row'}}>
            <FontAwesome5 name="user-alt" size={24} color="black" style={{paddingTop:8,paddingRight:4}} />
            <TextInput
              placeholder="Username"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
              onChangeText={(text) => AuthStore.inputs.username = text}
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <FontAwesome5 name="key" size={24} color="black" style={{paddingTop:8,paddingRight:4}}/>
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
              onChangeText={text => AuthStore.inputs.password = text}
            />
          </View>

          <View style={{flexDirection:'row'}}>
            <FontAwesome5 name="key" size={24} color="black" style={{paddingTop:8,paddingRight:4}}/>
            <TextInput
              secureTextEntry={true}
              placeholder="New password"
              style={[Styles.Input, AuthStore.errors.username && Styles.InputError, {flex:1}]}
              onChangeText={text => AuthStore.inputs.repeatedPassword = text}
            />
          </View>

          <Button onPress={AuthStore.changeUserPassword} title="Izmeni sifru" color='#FFCC00'/>

          { AuthStore.error && <View style={Styles.ErrorMsgWrap}>
            <AntDesign name="closecircle" size={18} color="black" />
            <Text style={Styles.ErrorMsg}>{AuthStore.error}</Text>
          </View>}
          { AuthStore.success && <View style={Styles.ErrorMsgWrap}>
            <AntDesign name="checkcircle" size={18} color="#FFCC00" />
            <Text style={[Styles.ErrorMsg,{color:"#FFCC00"}]}>{AuthStore.success}</Text>
          </View>}
        </View>
      </View>
    </View>
  );
}

export default observer(ChangePassword);