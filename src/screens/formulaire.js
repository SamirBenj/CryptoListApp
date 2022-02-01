import { StyleSheet, TextInput,View,Text, Pressable } from "react-native";
import React from "react";
import { useState } from "react/cjs/react.development";

const Form =({navigation})=>{

    const [myValueFilm , setValueFilm]= useState('');
    return(
        <View style={{alignItems:'center', marginTop:30,}}>
                <Text style={{fontWeight:'bold'}}>Formulaire</Text>
                <TextInput 
                style={{backgroundColor:'grey',margin:40, width:200}}
                selectionColor={'red'} 
                placeholder="votre film" 
                onChangeText={(value)=> {setValueFilm(value); console.log(value)}}>
                </TextInput>
                <View style={{backgroundColor:'red', padding:15, borderRadius:20}}>
                    <Pressable onPress={()=>{ 
                        navigation.navigate('ListFilm',{
                            nomFilm : myValueFilm,
                        })
                    }}>
                    <Text  style={{color:'white'}}> Recherche</Text>
                </Pressable>
                </View>
                
        </View>

    );

    
}

const styles = StyleSheet.create({

})
export default Form