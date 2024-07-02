import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigators/Navigation';


function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

export default App;