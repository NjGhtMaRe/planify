import React, {useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';

const Checkbox = ({checked, onPress, style}) => {
  return (
    <Pressable
      hitSlop={8}
      onPress={onPress}
      style={[styles.container, checked ? styles.checkedBox : {}, style]}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

Checkbox.defaultProps = {
  checked: true,
};

export default React.memo(Checkbox);
