import * as React from 'react';
import {Button, View, Text, TouchableHighlight} from 'react-native';
import {observer} from 'mobx-react';
import CartStore from "../stores/CartStore";
import Styles from '../styles';
import StylesHome from "../styles/home";
import {AntDesign, Entypo} from "@expo/vector-icons";

function Cart(props) {
  const [orderSent, setOrderSent] = React.useState(false);

  const items = [];
  let total = 0;
  CartStore.cart.forEach( item => {
    items.push(
      <View style={{padding: 8}}>
      <Text styles={StylesHome.CartItems} >{item.product.name}   x {item.count}    {item.count * item.product.price}din</Text>
      </View>
    )
    total += item.count * item.product.price;
  })
  const makeOrder= () => {
    if (CartStore.cart.length) {
      setOrderSent(true);
      CartStore.makeOrder();
    }
  }
  return (
    <View style={Styles.Modal}>
      <TouchableHighlight onPress={props.closeCartContent} style={Styles.ModalBackGround}>
        <View/>
      </TouchableHighlight>

      <View style={Styles.Pannel}>
        <Text style={Styles.Title}>Stavke</Text>
        <View style={StylesHome.Cart}>
          {items}
        </View>

        <View style={StylesHome.AddToCart}>

          { !orderSent &&
          <>
            <Entypo.Button name="shopping-cart" size={24} color="black" backgroundColor="white"/>
            <Text style={{fontSize:16, fontWeight: 'bold', padding:8}}>{total} din</Text>
            <Button onPress={makeOrder} title="Naruci" color='#FFCC00'/>
          </>
          }
          {
            orderSent &&
              <>
                <AntDesign name="checkcircle" size={24} color="#FFCC00" />
                <Text style={{fontSize:16, fontWeight: 'bold', padding:8, color:'#FFCC00'}}>Narudzbina je poslata!</Text>
              </>
          }
        </View>

      </View>

    </View>
  );
}

export default observer(Cart);