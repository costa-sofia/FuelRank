import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from "../screens/Entry";
import Car from '../screens/Car';
import Calculator from '../screens/Calculator';




const EntryStack = createNativeStackNavigator();

const EntryRoute=() =>   {
  return (
    <EntryStack.Navigator>
      <EntryStack.Screen name="Entry" component={Entry} options={{ headerShown: false }}/>
      <EntryStack.Screen name="Car" component={Car} options={{ headerShown: false }}/>
      <EntryStack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }}/>
    </EntryStack.Navigator>
  );
}

export default EntryRoute;

