import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroPage from '../screens/IntroPage';
import HomePage from '../screens/HomePage';
import DetailsPage from '../screens/detailsPage';
import ItemRow from '../components/items';

import Form from '../screens/formulaire'
import ListFilm from '../screens/listFilm';
const Stack = createNativeStackNavigator();


export default class HomeStackNavigator extends React.Component {
    
    render(){
    return (
        <Stack.Navigator 
            initialRouteName='Formulaire'
        >
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
                <Stack.Screen
                name= "DetailsPage"
                component={DetailsPage}
                options={{ 
                    headerStyle: {
                        backgroundColor: 'blue',
                      },
                      title:'Details',
                      headerTintColor: '#fff',

                }}
                />
                <Stack.Screen
                name= "Formulaire"
                component={Form}
                options={{ 
                    headerStyle: {
                        backgroundColor: 'blue',
                      },
                      title:'Formulaire',
                      headerTintColor: '#fff',

                }}
                />
                <Stack.Screen
                name= "ListFilm"
                component={ListFilm}
                options={{ 
                    headerStyle: {
                        backgroundColor: 'blue',
                      },
                      title:'ListFilm',
                      headerTintColor: '#fff',

                }}
                />
                
          
        </Stack.Navigator>
    )
    }
}

// export default HomeStackNavigator;