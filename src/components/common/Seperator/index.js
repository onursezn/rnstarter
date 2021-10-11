import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from "../../../assets/theme/colors";

const Separator = (style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 20, style}}>
      <View style={{flex: 1, height: 1, backgroundColor: colors.grey}}/>
    </View>
  )
}

export default Separator;
