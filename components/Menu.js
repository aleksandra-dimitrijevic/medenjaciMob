import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider, Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const MyMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
         flex:1,
         width: 50,
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Entypo.Button 
                    name="menu" size={32} 
                    color="black"
                    backgroundColor = 'white'
                    onPress={openMenu}
                    />}
                  >
          <Menu.Item onPress={() => {closeMenu()}} title="User Info" />
          <Menu.Item onPress={() => {closeMenu()}} title="Change Password" />
          <Divider />
          <Menu.Item 
            onPress={() => {closeMenu()}} 
            title={
              <View style= {{ flexDirection: "row"}}>
                <Ionicons name="power-sharp" size={24} color="black" title="Log out"/>
                <Text style = {{paddingLeft :8, paddingTop: 4}}>  Logout</Text>
              </View>
            }
          />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyMenu;
