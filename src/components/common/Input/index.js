import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({onChangeText, style, value}) => {
    return (
        <View>
            <TextInput>
                style={[styles.TextInput, style]}
                onChangeText={onChangeText}
                value={value}
            </TextInput>
        </View>
    );
}