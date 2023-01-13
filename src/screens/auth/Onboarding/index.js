import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';
const Onboarding = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../../assets/onboarding.png')}
      />
      <View>
        <Text style={styles.title}>Best task manager app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your
        </Text>
        <Text style={styles.subtitle}>tasks and boost your productivity</Text>
        <Button>Log in</Button>
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
