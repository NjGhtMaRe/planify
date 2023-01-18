import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import {PRIVACY_LINK, TERM_LINK} from '../../../constant/links';
import auth from '@react-native-firebase/auth';

import styles from './styles';
const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});

  const onCheckBoxPress = () => {
    setAgreed(!agreed);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };
  Alert.alert(values);
  const onSubmit = () => {
    if (values.password !== values.confirm_password) {
      Alert.alert('Password does not match');
      return;
    }
    if (!agreed) {
      Alert.alert('You have not agree with the Terms');
    }
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        Alert.alert('You have successfully registered!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Join the hub!</Text>
        </View>

        <Input
          onChangeText={vals => onChange(vals, 'first_name')}
          placeholder="First name"
        />
        <Input
          onChangeText={vals => onChange(vals, 'last_name')}
          placeholder="Last name"
        />
        <Input
          onChangeText={vals => onChange(vals, 'email')}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          onChangeText={vals => onChange(vals, 'password')}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Input
          onChangeText={vals => onChange(vals, 'confirm_password')}
          secureTextEntry={true}
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
        <Button onPress={onSubmit} type="blue">
          Create account
        </Button>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Already Registered?</Text>

          <Text style={styles.linkText}> Sign in!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
