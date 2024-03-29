import React from 'react';
import { View, TextInput, Text } from 'react-native';

const FormField = ({ label, value, onChangeText, secureTextEntry=false }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        marginBottom: 15,
      }}
    >
      <Text style={{ marginBottom: 12, fontSize: 14, color: '#C5C5C5' }}>
        {label}
      </Text>
      <TextInput
        value={value}
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#364047',
          paddingBottom: 10,
        }}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
    />
    </View>
  );
};

export default FormField;
