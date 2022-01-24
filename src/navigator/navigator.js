import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroPage from '../screens/IntroPage';
import HomePage from '../screens/HomePage';


const Stack = createNativeStackNavigator();


export default class HomeStackNavigator extends React.Component {
    
    render(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "Intro"
                component={IntroPage}
                options={{ 
                    title :'',
                    headerStyle: {
                        backgroundColor: 'blue',
                      },
                      headerTintColor: '#fff',
                }}
                />
            <Stack.Screen
                name= "HomePage"
                component={HomePage}
                options={{ 
                    headerStyle: {
                        backgroundColor: 'blue',
                      },
                      title:'Accueil',
                      headerTintColor: '#fff',

                }}
                />
          
        </Stack.Navigator>
    )
    }
}

// export default HomeStackNavigator;