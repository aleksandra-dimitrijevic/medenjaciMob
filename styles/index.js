import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8
  },
  InputError: {
    borderColor: 'red'
  },
  Title: {
     fontSize: 20,
     fontWeight: 'bold',
     padding: 8,
     borderBottomColor: '#CCCCCC',
     borderBottomWidth: 2,
    marginBottom: 8,
  },
  Pannel:{
    borderWidth:2,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    paddingLeft:8,
    paddingRight:8,
    paddingBottom: 8,
    backgroundColor: 'white',
    zIndex:2,
    maxWidth: '90%',
    width:'70%'
  },
  BackgroundImage:{
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%', 
    flex:1,
  },
  Link: {
    color: 'orange', 
    fontWeight: '400', 
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 16,
    textDecorationLine: 'underline'
  },
  Modal : {
    position: "absolute",
    bottom: 0,
    left: 0,
    alignItems: "center",
    height:'80%',
    width: '100%',
    zIndex: 1,
  },
  ModalBackGround:{
    position: "absolute",
    top: 0,
    left: 0,
    height:'100%',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    opacity: 0.3
  },
  TextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  ModalMenu : {
    position: "absolute",
    top: 50,
    left: 8,
    zIndex: 3,
  },
  PannelMenu:{
    borderWidth:2,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'white',
    zIndex:4,
    width:windowWidth*0.55
  },
  MenuItem:{
    fontSize: 16,
    padding: 8,
    fontWeight: "400",
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  MenuLast:{
    fontSize: 16,
    fontWeight: "400",
    padding: 8
  },
  ErrorMsgWrap:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8
  },
  ErrorMsg:{
    fontSize:14,
    paddingLeft:8,
    fontWeight: 'bold'
  },
  TitleModal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TitleWrapper:{
    padding: 8,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 2,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});

export default Styles;