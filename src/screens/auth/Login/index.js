import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import styles from './styles';
const Login = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    // if (!values.first_name || !values.last_name) {
    //   Alert.alert('Please enter first name and last name');
    //   return;
    // }
    // if (values.password !== values.confirm_password) {
    //   Alert.alert('Password does not match');
    //   return;
    // }
    // if (!agreed) {
    //   Alert.alert('You have not agree with the Terms');
    // }
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('Account signed in');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back!</Text>
      </View>
      <View styles={styles.inputContainer}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={vals => onChange(vals, 'email')}
        />
        <Input
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={vals => onChange(vals, 'password')}
        />
      </View>
      <Button onPress={onSubmit}>Log in</Button>
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
