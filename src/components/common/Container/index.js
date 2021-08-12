import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import {View} from 'react-native';

const Container = ({children}) => {
    return(
        <ScrollView>
            <View style={styles.wrapper}>{children}</View>
        </ScrollView>
    )
}

export default Container;