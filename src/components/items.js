import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

const ItemRow =({item})=>{
    
    // console.log(item.item.slug);
    return(
        <View style={{
            flexDirection:'row',
            alignItems:'center', 
            padding:20, 
            margin:20, 
            width:300, 
            borderRadius:30, 
            backgroundColor:'blue',
            }}>
            {/* <Text style={{color:'red'}}>id</Text> */}
            <Image         style={styles.logo}
                source={{ uri:`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.item.id}.png`}}></Image>
            <View style={{flexDirection:'column', padding:10,borderRadius:20}}>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold', textTransform:'capitalize'}}>{item.item.slug}</Text>  
                <Text style={{color:'orange', fontWeight:'bold', fontSize:20}}>{item.item.quote.USD.price}</Text>
                
            </View>
        </View> 
    );

}
const styles = StyleSheet.create({
    logo:{
        width:40,
        height:40,
        

}
});
    export default ItemRow;