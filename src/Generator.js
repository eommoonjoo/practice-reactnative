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

export default function Generator(props) {
  const add = props.add;
  return (
    <View style={styles.generator}>
      <Button title='Add Number' onPress={() => add()} />
      {/* Button은 만들때에는 title이 항상 필요하다.  */}
    </View>
  );
}

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});
