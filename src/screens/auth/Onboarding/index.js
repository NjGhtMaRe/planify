import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../../components/Button';
import colors from '../../../constant/colors';
import styles from './styles';
const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/onboarding.png')}
      />
      <View style={styles.footer}>
        <View style={styles.bottom}>
          <Text style={styles.title}>Best task management app</Text>
          <Text style={styles.subtitle}>
            Get organized by sorting out all your
          </Text>
          <Text style={styles.subtitle}>tasks and boost your productivity</Text>
          <View style={{marginTop: 15}}>
            <Button onPress={() => navigation.navigate('Login')}>Log in</Button>
            <Button type="blue" onPress={() => navigation.navigate('Signup')}>
              Get started
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
