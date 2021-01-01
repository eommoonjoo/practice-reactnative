import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Numlist(props) {
  return props.num.map((item, idx) => (
    <TouchableOpacity
      style={styles.numList}
      key={idx}
      onPress={() => props.delete(idx)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});
