import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import  Icon from 'react-native-vector-icons/AntDesign';
const IntroPage =({navigation})=>{
    return (
        <View style={styles.mainContaier}>
                <Text style={{
                  fontSize:30,
                  fontWeight:'bold',
                  width:230,
                  color:'white',
              }}>
                  Bienvenue sur CryptoApp
                </Text>
              <Pressable backgroundColor='red' style={styles.buttonStyle} onPress={()=>{
                navigation.navigate('HomePage');
              }} >
                  <View style={{ justifyContent:'center',flexDirection:'row'}}>

                <Text style={{fontWeight:'bold' , fontSize:20,color:'blue'}}>
                  Commencer
                </Text>
              <Icon style={{fontSize:25,paddingLeft:20,color:'blue'}} name='arrowright'></Icon>

                </View>
              </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContaier:{
      flex:1,
      backgroundColor: 'blue',
      alignItems:'center',
      textAlign:'cenrer',
      justifyContent:'space-around',
  
    },
    buttonStyle:{
      // width:290,
      padding:15,
      alignItems:'center', 
      borderRadius:10,
      backgroundColor:'white',
    }
});

export default IntroPage