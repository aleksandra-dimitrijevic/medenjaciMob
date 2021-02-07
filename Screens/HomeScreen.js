import * as React from 'react';
import { Button, View, Text, TextInput, ImageBackground } from 'react-native';
import { observer } from 'mobx-react';
import { Entypo,  Feather  } from '@expo/vector-icons'; 

import Styles from '../styles';
import StylesHome from '../styles/home'
import AuthStore from '../stores/AuthStore';
import Header from '../components/Header'
import Product from '../components/Product'
import { MaterialIcons } from '@expo/vector-icons';
import {products} from '../data/products'
import ProductDetails from '../components/ProductDetails'
import Cart from "../components/Cart";


function HomeScreen({navigation}) {
  const [page, setPage] = React.useState(0);
  const [product, setProduct] = React.useState(null);
  const [openCart, setOpenCart] = React.useState(false);

  const closeCartContent = () => {
    setOpenCart(false)
  }
  const openCartContent = () => {
    setOpenCart(true)
  }
  const closeDetails = () => {
    setProduct(null)
  }
  const openDetails = (product) => {
    setProduct(product)
  }
 
  var productsOnPage = products.slice(page*3, page*3+2<products.length ? page*3+3: products.length+1);
  var honeys =[];
  productsOnPage.forEach( (product,index) => {
      honeys.push(<Product product ={product} navigation={navigation} openDetails = {openDetails} />)
  })

  const changePage = (newP) =>{
    setPage(newP);
    productsOnPage = products.slice(newP*3, newP*3+2<products.length ? newP*3+3: products.length+1);
    honeys =[];
    productsOnPage.forEach( (product,index) => {
        honeys.push(<Product product ={product} navigation={navigation} openDetails = {openDetails}/>)
    })
  }

  return (
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <ImageBackground source= {require('../assets/home_1.png')}
       style={[StylesHome.BackgroundImage]}>
       <Header openCartContent = {openCartContent}/>
       { openCart && <Cart closeCartContent={closeCartContent}/>}

       { product && <ProductDetails closeDetails = {closeDetails} product = {product}/>}

       { !product && !openCart &&
         <>
          { page!== 0 && <View style={StylesHome.Arrow}>
            <MaterialIcons.Button 
              name="keyboard-arrow-up"
              size={24}
              color="black"
              backgroundColor='white'
              onPress= {() => {changePage(page-1)}}/>
          </View>
          }
          {honeys}
          { page*3+3 < products.length && <View style={StylesHome.Arrow}>
            <MaterialIcons.Button 
              name="keyboard-arrow-down"
              size={24}
              color="black"
              backgroundColor='white'
              onPress= {() => {changePage(page+1)}}/>
          </View>
          }
       </>
       }
      </ImageBackground>
    </View>
  );
}

export default observer(HomeScreen);