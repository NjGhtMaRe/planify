import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const AddTasks = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Task screen</Text>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
