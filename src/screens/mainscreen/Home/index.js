import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Daily Tasks:</Text>
      <View style={styles.body}>
        <View style={styles.taskContainer}>
          <Text style={styles.text}>High priority</Text>
          <Text style={styles.number}>3</Text>
        </View>
        <View style={styles.taskContainer}>
          <Text style={styles.text}>Due deadline</Text>
          <Text style={styles.number}>1</Text>
        </View>
        <View style={styles.taskContainer}>
          <Text style={styles.text}>Quick win</Text>
          <Text style={styles.number}>2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
