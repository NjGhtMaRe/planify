import 'react-native-gesture-handler';
import React from 'react';
import Onboarding from './screens/auth/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';

const Stack = createStackNavigator();
function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onbarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default React.memo(Routes);
