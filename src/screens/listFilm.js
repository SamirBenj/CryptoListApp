import { StyleSheet, TextInput,View,Text, Pressable } from "react-native";
import React from "react";

const ListFilm =({route})=>{
     const{nomFilm} =  route.params;
    return(
        <View style={{alignItems:'center', marginTop:30,}}>
                <Text style={{fontWeight:'bold'}}>{nomFilm}</Text>
                
  
                
        </View>

    );

    
}

const styles = StyleSheet.create({

})
export default ListFilm