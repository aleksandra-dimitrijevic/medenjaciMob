import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StylesHome = StyleSheet.create({
  BackgroundImage:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%', 
    flex:1
  },
  Product: {
    flexDirection: 'row',
    padding:8,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent:"center",
    position:"relative"
  },
  Frame: {
    width: windowHeight*0.2,
    height: windowHeight*0.2,
    alignItems: 'center',
    justifyContent:"center",
    resizeMode: 'cover'
  },
  HoneyImage: {
    width: windowHeight*0.10,
    height: windowHeight*0.13,
  },
  ProductInfo: {
    alignItems:"center",
    justifyContent: 'center',
    padding:12,
    width: 200
  },
  ProductText:{
    fontSize: 18,
    fontWeight: "400"
  },
  Arrow:{
    alignItems: 'center',
    justifyContent:"center",
    height:26
  },
  ProductDetailsText:{
    fontSize: 16,
  },
  ProductDetailsTextBold:{
    paddingLeft:8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  ProductCountInput:{
    width: 50,
    marginLeft: 5,
    marginRight:5,
    textAlign: "center"
  },
  AddToCart: {
    flexDirection: 'row',
    height: 50,
    paddingTop:7,
    paddingBottom:7,
    justifyContent: 'flex-end',
    borderTopColor: '#CCCCCC',
    borderTopWidth: 2,
    marginTop: 8,
    paddingRight:8
    },
  CartItems: {
    fontSize: 16
  },
  Cart:{
    height: windowHeight*0.40,
    overflow: "scroll"
  },
  CartCount:{
    position: 'absolute',
    top:0,
    right:0,
    backgroundColor:'orange',
    color:'white',
    paddingLeft:8,
    paddingRight:8,
    borderRadius: 10
  }
});

export default StylesHome;