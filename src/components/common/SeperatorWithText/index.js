import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from "../../../assets/theme/colors";

const SeparatorWithText = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
      <View style={{flex: 1, height: 1, backgroundColor: colors.grey}}/>
      <View>
        <Text style={{width: 50, textAlign: 'center'}}>Text</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor:  colors.grey}}/>
    </View>
  )
}

export default SeparatorWithText;
