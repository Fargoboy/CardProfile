import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profilecard from './CardComponent/profilecard';
import axios from "axios";
import { Directions } from 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <Profilecard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Cardbox:{
    flex: 1,
  justifyContent: 'center',
  backgroundColor: 'blue',
  borderRadius: 20,

  }
});

