import * as React from 'react';
import {Button, View, Text, TextInput, ImageBackground, TouchableHighlight} from 'react-native';
import { observer } from 'mobx-react';

import Styles from '../styles';
import AuthStore from '../stores/AuthStore';
import {FontAwesome5, FontAwesome, AntDesign} from '@expo/vector-icons';

function UserInfo(props) {
  const [firstName, setFirstName] = React.useState(AuthStore.currentUser?.firstName);
  const [lastName, setLastName] = React.useState(AuthStore.currentUser?.lastName);
  const [phoneNumber, setPhoneNumber] = React.useState(AuthStore.currentUser?.phoneNumber);
  const [address, setAddress] = React.useState(AuthStore.currentUser?.address);

  return (
    <View style = {Styles.Modal}>
      <TouchableHighlight onPress={() => props.closeUserInfo() } style={Styles.ModalBackGround}>
        <View/>
      </TouchableHighlight>
        <View style={[Styles.Pannel]}>
          <View style={Styles.TitleWrapper}>
            <Text style={Styles.TitleModal}>Informacije</Text>
            <AntDesign name="closecircle" size={24} color="black" onPress={() => props.closeUserInfo()}/>
          </View>
          <View>
            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="user-alt" size={24} color="black" style={{paddingTop:8,paddingRight:4}} />
              <TextInput
                placeholder="First Name"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => setFirstName(text)}
                value={firstName}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <FontAwesome5 name="user-alt" size={24} color="black" style={{paddingTop:8,paddingRight:4}} />
              <TextInput
                placeholder="Last Name"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => setLastName(text)}
                value={lastName}
              />
            </View>

            <View style={{flexDirection:'row'}}>
              <FontAwesome name="phone" size={32} color="black" style={{paddingTop:8,paddingRight:4}} />
              <TextInput
                placeholder="Phone Number"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError, {flex:1}]}
                onChangeText={text => setPhoneNumber}
                value={phoneNumber}
              />
            </View>

            <View style={{flexDirection:'row'}}>
              <FontAwesome name="home" size={26} color="black" style={{paddingTop:8,paddingRight:4}}/>
              <TextInput
                placeholder="Address"
                style={[Styles.Input, AuthStore.errors.username && Styles.InputError,{flex:1}]}
                onChangeText={text => setAddress(text)}
                value={address}
              />
            </View>

            <Button onPress={() => AuthStore.changeUserInfo({firstName,lastName,phoneNumber,address})} title="Izmeni podatke" color='#FFCC00'/>

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

export default observer(UserInfo);