import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import { observer } from 'mobx-react';
import StylesHome from '../styles/home'
import Header from '../components/Header'
import Product from '../components/Product'
import { MaterialIcons } from '@expo/vector-icons';
import {products} from '../data/products'
import ProductDetails from '../components/ProductDetails'
import Cart from "../components/Cart";
import UserInfo from "../components/UserInfo";
import ChangePassword from "../components/ChangePassword";

const CONTENT = { HOME: 0, DETAILS: 1, CART: 2, INFO: 3, CHANGE_PASSWORD: 4 }

function HomeScreen({navigation}) {
  const [page, setPage] = React.useState(0);
  const [content, setContent] = React.useState(CONTENT.HOME);
  const [product, setProduct] = React.useState(null);

  const openCartContent = () => setContent(CONTENT.CART);
  const openUserInfo = () => setContent(CONTENT.INFO);
  const openChangePass = () => setContent(CONTENT.CHANGE_PASSWORD);
  const closeAll = () => setContent(CONTENT.HOME);
  const closeDetails = () => {
    setProduct(null);
    setContent(CONTENT.HOME);
  }
  const openDetails = (product) => {
    setProduct(product);
    setContent(CONTENT.DETAILS);
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
       <Header openCartContent = {openCartContent} openUserInfo={openUserInfo} openChangePass={openChangePass} closeAll={closeAll}/>

       { content===CONTENT.CART && <Cart closeCartContent={closeAll}/>}
       { content===CONTENT.DETAILS && <ProductDetails closeDetails = {closeDetails} product = {product}/>}
       { content===CONTENT.INFO && <UserInfo closeUserInfo = {closeAll}/>}
       { content===CONTENT.CHANGE_PASSWORD && <ChangePassword closeChangePass={closeAll}/> }
       { content===CONTENT.HOME &&
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