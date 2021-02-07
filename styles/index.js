import { StyleSheet } from 'react-native';

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
  }
});

export default Styles;