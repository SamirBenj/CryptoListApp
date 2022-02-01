import { StyleSheet, View,Text,Image } from "react-native"
import React, { useEffect } from 'react';

const DetailsPage =({route})=>{
    const {nomCrypto, price,id} = route.params;
   return(
       <View style={styles.mainContainer}>
        <View style={styles.card}>
            <Text style={{color:'white', fontWeight:'bold',textTransform:'capitalize', fontSize:30}}>{nomCrypto}</Text>
            <Text style={{color:'white',textTransform:'capitalize', fontSize:15}}>{price} $</Text>
            <Image         
            style={styles.logo}
                source={{ uri:`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}}></Image>
            </View>
       </View>
   ); 
}

const styles = StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:'blue',
},
card:{
    padding:30,
    flexDirection:'column',
    alignItems:'center',
},
logo:{
    width:40,
    height:40,
    

}
})

export default DetailsPage;