import * as React from 'react';
import { Button, View, Text, Image , TouchableHighlight} from 'react-native';
import { observer } from 'mobx-react';
import { Entypo } from '@expo/vector-icons'; 

import StylesHome from '../styles/home'
import MyMenu from '../components/Menu'
import CartStore from "../stores/CartStore";

function Header(props) {

  return (
    <View style = {{flexDirection: 'row', height: 90, justifyContent: "space-between", padding: 8}}>
      <View>
        <MyMenu openUserInfo={props.openUserInfo} openChangePass={props.openChangePass} closeAll={props.closeAll}/>
      </View>
      <TouchableHighlight onPress={props.closeAll}>
          <Image source= {require('../assets/logo.png')}  style={{ width: 90, height:80 }} />
      </TouchableHighlight>
      <View style={{position:'relative'}}>
        <Entypo.Button name="shopping-cart" size={24} color="black" backgroundColor="white" onPress={props.openCartContent}/>
        { CartStore.cart.length!=0 && <Text style={StylesHome.CartCount}>{CartStore.cart.length}</Text>}
      </View>

     
    </View>
    
  );
}

export default observer(Header);