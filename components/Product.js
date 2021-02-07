import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, TouchableHighlight, Modal, Alert } from 'react-native';

import Styles from '../styles';
import StylesHome from '../styles/home'

import ProductDetails from './ProductDetails'

function Product(props) {
  
  return (
    <View style = {StylesHome.Product}>
      <TouchableHighlight onPress={ () => props.openDetails(props.product)}>
       <ImageBackground source= {require('../assets/frame.png')}
        style={StylesHome.Frame}>
          <Image source= {require('../assets/livadski1kg.jpg')} style= {StylesHome.HoneyImage}/>
        </ImageBackground>
      </TouchableHighlight>  
      <View style={StylesHome.ProductInfo}>
        <Text style={StylesHome.ProductText}>{props.product.name}</Text>
        <Text style={StylesHome.ProductText}>{props.product.price} din</Text>
      </View>
    </View>
  );
}

export default Product;