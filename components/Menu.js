import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Styles from "../styles";
import AuthStore from "../stores/AuthStore";
import {observer} from "mobx-react";

const MyMenu = (props) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => {
    setVisible(!visible);
  }

  const closeMenu = () => setVisible(false);

  const logOut = () => {
    closeMenu();
    AuthStore.logOut();
  }
  const openUserInfo = () => {
    closeMenu();
    props.openUserInfo();
  }
  const openChangePass = () => {
    closeMenu();
    props.openChangePass();
  }
  return (
    <>
      <Entypo.Button name="menu" size={32} color="black" backgroundColor="white" onPress={openMenu}/>
      { visible &&
      <View style={Styles.ModalMenu}>
        <View style={Styles.PannelMenu}>
            <Text style={Styles.MenuItem} onPress={() => {
              AuthStore.error = null;
              AuthStore.reset();
              openUserInfo()
            }}>Licne informacije</Text>
            <Text style={Styles.MenuItem} onPress={() => {
              AuthStore.error = null;
              AuthStore.reset();
              openChangePass()
            }}>Promena sifre</Text>
            <View style= {{ flexDirection: "row"}}>
              <AntDesign name="poweroff" size={18} color="black" style={{paddingTop:8,paddingLeft:8}} />
              <Text style={Styles.MenuLast} onPress={()=> logOut()}>Odjavi se</Text>
            </View>
        </View>
      </View>
      }
    </>
  );
};

export default observer(MyMenu);
