import React, {useState} from 'react';
import {Text, SafeAreaView, View, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import {PRIVACY_LINK, TERM_LINK} from '../../../constant/links';
import auth from '@react-native-firebase/auth';

import styles from './styles';
const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('Email: ', email);

  const onCheckBoxPress = () => {
    setAgreed(!agreed);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const submitRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Join the hub!</Text>
      </View>

      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry={true}
        textContentType="newPassword"
        placeholder="Password"
        onChangeText={setPassword}
      />
      <Input
        secureTextEntry={true}
        textContentType="newPassword"
        placeholder="Confirm Password"
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          checked={agreed}
          onPress={onCheckBoxPress}
          style={{marginRight: 10}}
        />
        <Text style={styles.termText}>I agree to</Text>
        <Text
          onPress={() => onLinkPress(TERM_LINK)}
          style={[styles.termText, styles.link]}>
          {' '}
          Terms and Conditions
        </Text>
        <Text style={styles.termText}> and</Text>
        <Text
          onPress={() => onLinkPress(PRIVACY_LINK)}
          style={[styles.termText, styles.link]}>
          {' '}
          Privacy Policy
        </Text>
      </View>
      <Button onPress={submitRegister()} type="blue">
        Create account
      </Button>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Already Registered?</Text>

        <Text style={styles.linkText}> Sign in!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
