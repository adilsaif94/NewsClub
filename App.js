import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;