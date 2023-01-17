import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import styles from './styles';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back!</Text>
      </View>
      <View styles={styles.inputContainer}>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input secureTextEntry={true} placeholder="Password" />
      </View>
      <Button>Log in</Button>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.text}>Not registered?</Text>

        <Text style={styles.linkText}> Sign up!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default React.memo(Login);
