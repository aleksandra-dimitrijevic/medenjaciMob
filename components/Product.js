import * as React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import StylesHome from '../styles/home'

function Product(props) {
  
  return (
    <View >
      <TouchableOpacity onPress={ () => props.openDetails(props.product)} style = {StylesHome.Product}>
       <ImageBackground source= {require('../assets/frame.png')}
        style={StylesHome.Frame}>
          <Image source= {props.product.image} style= {StylesHome.HoneyImage}/>
        </ImageBackground>
      <View style={StylesHome.ProductInfo}>
        <Text style={StylesHome.ProductText}>{props.product.name}</Text>
        <Text style={StylesHome.ProductText}>{props.product.price} din</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

export default Product;