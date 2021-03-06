// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name={'Details'} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
