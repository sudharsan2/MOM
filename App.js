import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/login/signin';
import Signup from './src/login/signup';
import InspectionReport from './src/Home/InspectionReport';
import List from './src/Home/reportlist';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}  />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}  />
        <Stack.Screen name="InspectionReport" component={InspectionReport} options={{ headerShown: false }}  />
        <Stack.Screen name="ReportList" component={List} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
