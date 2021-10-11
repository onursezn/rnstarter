import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

const CenterContainer = ({style, children}) => {
  return (
      <View style={[styles.wrapper, style]}>{children}</View>
  );
};

export default CenterContainer;
