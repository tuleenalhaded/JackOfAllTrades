import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import ConsumerHomeScreen from './src/screens/consumer/ConsumerHomeScreen';
import DeviceControlScreen from './src/screens/consumer/DeviceControlScreen';
import AddDeviceScreen from './src/screens/consumer/AddDeviceScreen';
import CompanyLoginScreen from './src/screens/company/CompanyLoginScreen';
import CompanyDashboardScreen from './src/screens/company/CompanyDashboardScreen';
import UICustomizerScreen from './src/screens/company/UICustomizerScreen';
import DeviceIntegratorScreen from './src/screens/company/DeviceIntegratorScreen';
import AnalyticsScreen from './src/screens/company/AnalyticsScreen';
import SubscriptionScreen from './src/screens/company/SubscriptionScreen';

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
          <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
          <Stack.Screen name="CompanyLogin" component={CompanyLoginScreen} />
          <Stack.Screen name="CompanyDashboard" component={CompanyDashboardScreen} />
          <Stack.Screen name="UICustomizer" component={UICustomizerScreen} />
          <Stack.Screen name="DeviceIntegrator" component={DeviceIntegratorScreen} />
          <Stack.Screen name="Analytics" component={AnalyticsScreen} />
          <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
