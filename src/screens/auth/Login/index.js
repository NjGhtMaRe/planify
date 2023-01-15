import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';

import styles from './styles';
const Login = () => {
  const [email, setEmail] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome back!</Text>
      <View>
        <TextInput onChangeText={setEmail} placeholder="Email" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Login);
