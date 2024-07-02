import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../TodayTask/Dashboard';
import CreateInvoice from '../TodayTask/CreateInvoice';

// import Detail from '../screens/News App/Detail';
// import Home from '../screens/News App/Home';
// import Main from '../screens/Main';
// import ReduxHome from '../screens/Redux/ReduxHome';




const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen  options={{
                headerShown: false,
                statusBarColor: '#33A5F9'
            }} name="Dashboard" component={Dashboard} />
            <Stack.Screen  options={{
                headerShown: false,
                statusBarColor: '#33A5F9'
            }} name="CreateInvoice" component={CreateInvoice} />
            {/* <Stack.Screen options={{
                headerShown: false,
                statusBarColor: '#008080'
            }} name="Main" component={Main} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen options={{
                headerShown: false,
            }} name="ReduxHome" component={ReduxHome} /> */}
        </Stack.Navigator>
    )
}

export default Navigation