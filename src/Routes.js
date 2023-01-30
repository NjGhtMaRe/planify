import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import Onboarding from './screens/auth/Onboarding';
import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme} from '@react-navigation/native';

import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/mainscreen/Home';
import Tasks from './screens/mainscreen/Tasks';
import AddTasks from './screens/mainscreen/AddTasks';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = ({navigation}) => {
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

  const Tabs = () => (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./assets/home_active.png')
                  : require('./assets/home_inactive.png')
              }
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./assets/calendar_active.png')
                  : require('./assets/calendar_inactive.png')
              }
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFFFFF',
    },
  };

  if (user) {
    return (
      <Drawer.Navigator
        theme={theme}
        screenOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          itemStyle: {marginVertical: 5},
          labelStyle: {fontSize: 15},
        }}
        drawerType="slide"
        edgeWidth={100}
        overlayColor="rgba(0,0,0,0.5)"
        sceneContainerStyle={{backgroundColor: 'white'}}
        style={{backgroundColor: 'transparent'}}
        drawerIcon={focused => (
          <Image
            source={
              focused
                ? require('./assets/menu.png')
                : require('./assets/menu.png')
            }
            style={{width: 24, height: 24}}
          />
        )}>
        <Drawer.Screen
          name="Tabs"
          component={Tabs}
          // options={{
          //   drawerIcon: ({focused, size, color}) => (
          //     <Image
          //       source={require('./assets/menu.png')}
          //       style={{width: 24, height: size}}
          //     />
          //   ),
          // }}
        />
        <Drawer.Screen name="AddTasks" component={AddTasks} />
      </Drawer.Navigator>
    );
    // const logout = () => {
    //   auth()
    //     .signOut()
    //     .then(() => console.log('User signed out!'));
    // };
    // return (
    //   <SafeAreaView>
    //     <View>
    //       <Text>Welcome {user.displayName}</Text>
    //       <Text>You username is {user.email}</Text>
    //       <Text onPress={logout}>Log out</Text>
    //     </View>
    //   </SafeAreaView>
    // );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onbarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
