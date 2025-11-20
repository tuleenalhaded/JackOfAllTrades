import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import ConsumerHomeScreen from './src/screens/consumer/ConsumerHomeScreen';
import DeviceControlScreen from './src/screens/consumer/DeviceControlScreen';
import CompanyLoginScreen from './src/screens/company/CompanyLoginScreen';
import CompanyDashboardScreen from './src/screens/company/CompanyDashboardScreen';
import UICustomizerScreen from './src/screens/company/UICustomizerScreen';
import DeviceIntegratorScreen from './src/screens/company/DeviceIntegratorScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="RoleSelection"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen name="ConsumerHome" component={ConsumerHomeScreen} />
          <Stack.Screen name="DeviceControl" component={DeviceControlScreen} />
          <Stack.Screen name="CompanyLogin" component={CompanyLoginScreen} />
          <Stack.Screen name="CompanyDashboard" component={CompanyDashboardScreen} />
          <Stack.Screen name="UICustomizer" component={UICustomizerScreen} />
          <Stack.Screen name="DeviceIntegrator" component={DeviceIntegratorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
