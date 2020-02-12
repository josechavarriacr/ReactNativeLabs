import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Login({ navigation }) {

  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('ReviewDetails');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Login Screen</Text>
      <Button title='to review details screen' onPress={pressHandler} />
    </View>
  );
}