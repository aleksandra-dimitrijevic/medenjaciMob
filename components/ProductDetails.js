import * as React from 'react';
import {Button, View, Text, Image, ImageBackground, TouchableHighlight, TextInput} from 'react-native';
import {observer} from 'mobx-react';

import Styles from '../styles';
import StylesHome from '../styles/home'
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import CartStore from '../stores/CartStore'


function ProductDetails(props) {
  const [addedToCart, setAddedToCart] = React.useState(false);

  return (
    <View style={Styles.Modal}>
      <TouchableHighlight onPress={() => props.closeDetails()} style={Styles.ModalBackGround}>
        <View/>
      </TouchableHighlight>

      <View style={Styles.Pannel}>
        <View style={Styles.TitleWrapper}>
          <Text style={Styles.TitleModal}>{props.product.name}</Text>
          <AntDesign name="closecircle" size={24} color="black" onPress={() => props.closeDetails()}/>
        </View>
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <ImageBackground source={require('../assets/frame.png')}
                           style={StylesHome.Frame}>
            <Image source={require('../assets/livadski1kg.jpg')} style={StylesHome.HoneyImage}/>
          </ImageBackground>

          <View style={{flexDirection: 'row', height: 40, marginTop:8}}>
            <AntDesign.Button
              name="minuscircleo"
              size={20} color="black" backgroundColor='white' onPress={() => CartStore.decrement()}
            />
            <TextInput
              style={[Styles.Input, StylesHome.ProductCountInput]}
              onChangeText={cnt => CartStore.count = parseInt(cnt)}
              maxLength={3}
              textAlign='center'
              value={CartStore.count.toString()}
            />
            <AntDesign.Button
              name="pluscircleo"
              size={20} color="black" backgroundColor='white' onPress={() => CartStore.increment()}
            />
          </View>
        </View>
        <View>
            <Text>
                <Text style={StylesHome.ProductDetailsTextBold}>Cena: </Text>
                <Text style={StylesHome.ProductDetailsText}>{props.product.price} din</Text>
            </Text>
            <Text>
                <Text style={StylesHome.ProductDetailsTextBold}>Opis: </Text>
                <Text style={StylesHome.ProductDetailsText}>{props.product.description} </Text>
            </Text>
            <Text>
                <Text style={StylesHome.ProductDetailsTextBold}>Nacin koriscenja: </Text>
                <Text style={StylesHome.ProductDetailsText}>{props.product.usage} </Text>
            </Text>
        </View>
        <View style={StylesHome.AddToCart}>

          { !addedToCart &&
            <>
              <Entypo.Button name="shopping-cart" size={24} color="black" backgroundColor="white"/>
              <Button onPress={() => {
                CartStore.addProduct(props.product);
                setAddedToCart(true);
              }} title="Dodaj u korpu" color='#FFCC00'/>
            </>
          }
          {
            addedToCart &&
            <>
              <AntDesign name="checkcircle" size={24} color="#FFCC00" />
              <Text style={{fontSize:16, fontWeight: 'bold', padding:8, color:'#FFCC00'}}>Proizvod dodat!</Text>
            </>
          }
        </View>
      </View>

    </View>
  );
}

export default observer(ProductDetails);