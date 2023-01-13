import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Onboarding from './src/screens/auth/Onboarding';

function App() {
  return <Onboarding />;
}

export default React.memo(App);
