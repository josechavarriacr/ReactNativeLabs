import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Todo({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>Todo Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}