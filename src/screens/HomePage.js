import React, { useEffect } from 'react';
import {View,StyleSheet,Text,Image, ImageBackground, ScrollView, FlatList, Button,TouchableOpacity, Pressable} from 'react-native';
import ItemRow from '../components/items';
import { useState } from 'react';
import axios from 'axios';


const HomePage = ({navigation}) => {
  const [isLoading,setIsLoading] = useState(false);
  // https://pro-api.coinmarketcap.com/v1/cryptocurrency/map
 const url ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
//  https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest
      const [data, setData] = useState(true);
      const [isShowWidget,setShowData]= useState();
      const showData =() =>{
        if(isShowWidget == true){
          console.log('true')
          setShowData(false);
        }
        else{
          console.log('false');
          setShowData(true);
        }
      }
      useEffect(()=>{
      
          const fetchCryptoData = async()=>{
              try {
                  const response = await axios.get(url,{headers : {
                    'X-CMC_PRO_API_KEY': '0c0c4751-df32-491f-9890-0907b6af9449',
                    // 'X-CMC_PRO_API_KEY'
                    "Accept": "application/json",
                  },
                },);
                  const data = await response.data;
                  // console.log(response.data);
                  // console.log(data.data[0]['name'])
                  console.log(data)
                  setData(data.data);
                // e57341d0-1e2a-4b46-8091-1de011804232
                setIsLoading(true);

              }catch(e){
                  console.log(e);
              }
          }
          fetchCryptoData();
      },[]);
   
     
      return(
        <View style={styles.mainContainer}>
                <View style={styles.card}>
                    <Image style={{width:50, height:50}}  source={require('../assets/Bitcoin_Cash.png')}></Image>
                    <Text style={{fontSize:25, fontWeight:'bold', color:'white',}}>
                    Bitcoin
                    </Text>
                    <Text style={{fontSize:20, color:'white',marginTop:20}}>
                        22000 $
                    </Text>
                    {/* <Pressable  title='Test' onPress={()=>{navigation.navigate('DetailsPage')}}><Text>hello</Text></Pressable> */}
                    {/* isShowWidget ?? <Text>hello</Text> */}
                    {isShowWidget ?<Text>Bonjour</Text>:<Text>Hel</Text>}
                </View>
                    <View style={styles.bottomContainer}>
                    {/* <ScrollView> */}

                        <View>
                            <FlatList                             
                            data={data ?? 0}
                            renderItem={(item)=>
                            <Pressable 
                            onPress={()=>{
                            navigation.navigate('DetailsPage',{
                              nomCrypto:item.item.slug,
                              price:item.item.quote.USD.price,
                              id:item.item.id
                            }
                            )}}>
                              <ItemRow item={item}></ItemRow>
                            </Pressable>
                              }>
                            </FlatList>
                        </View>
                    {/* </ScrollView> */}

                    </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer :{
        flex:1,
        backgroundColor:'blue',
    },
    card:{
        flexDirection:'column',
        alignItems:'center',
        shadowColor:'black',
        // backgroundColor: 'red',
        // borderBottomRightRadius:20,
        // borderBottomLeftRadius:20,
        // shadowOffset:{
        //     width:9,
        //     height:4,
        // },
        // shadowOpacity:0.2,
        // margin:20,
        padding:30,
        // borderRadius:20,
    },
    bottomContainer:{
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        alignItems:'center',
        backgroundColor:'white',

    }


})

export default HomePage;