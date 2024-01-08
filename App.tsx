
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EntryStack from './src/routes/EntryRoute';
import EntryRoute from './src/routes/EntryRoute';
import CarProvider from './src/contexts/carcontext';
import FuelProvider, { FuelContext } from './src/contexts/fuelcontext';

export default function App() {
  return (
    <NavigationContainer>
      <FuelProvider>
        <CarProvider>
          <EntryRoute />
        </CarProvider>
      </FuelProvider>
    </NavigationContainer>
  );
}
