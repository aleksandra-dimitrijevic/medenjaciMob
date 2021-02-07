import * as React from 'react';
import { Button, View, Text, Image , TouchableHighlight} from 'react-native';
import { observer } from 'mobx-react';
import { Entypo } from '@expo/vector-icons'; 

import Styles from '../styles';
import StylesHome from '../styles/home'
import AuthStore from '../stores/AuthStore';
import MyMenu from '../components/Menu'

function Header(props) {

  return (
    <View style = {{flexDirection: 'row', height: 90, justifyContent: "space-between", padding: 8}}>
      <View>
        <MyMenu/>
      </View>
      <TouchableHighlight>
          <Image source= {require('../assets/logo.png')}  style={{ width: 90, height:80 }} />
      </TouchableHighlight>
      <Entypo.Button name="shopping-cart" size={24} color="black" backgroundColor="white" onPress={props.openCartContent}/>
     
    </View>
    
  );
}

export default observer(Header);