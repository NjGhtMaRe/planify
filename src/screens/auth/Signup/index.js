import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import colors from '../../../constant/colors';

import styles from './styles';
const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Join the hub!</Text>
      </View>

      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />

      <View style={styles.checkboxContainer}>
        <Checkbox checked={true} />
      </View>
      <Button type="blue">Create account</Button>
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
