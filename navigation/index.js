import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
            />

            {/* <Stack.Screen 
                name='Home'
                component={RestaurantScreen}
            /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index