import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import Onboarding from './screens/auth/Onboarding';
import auth from '@react-native-firebase/auth';

import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';

const Stack = createStackNavigator();
function Routes() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (user) {
    const logout = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    };
    return (
      <SafeAreaView>
        <View>
          <Text>Welcome {user.email}</Text>
          <Text onPress={logout}>Log out</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onbarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default React.memo(Routes);
