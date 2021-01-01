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
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function PickerComponent() {
  const [country, setCountry] = useState('korea');
  const [value, setValue] = useState(50);

  return (
    <View style={styles.container}>
      <Slider
        style={{ height: 40, width: 300 }}
        value={value}
        minimumValue={0}
        maximumValue={100}
        onValueChange={(value) => setValue(value)}
        minimumTrackTintColor='red'
        // slider에 색을 줄 때 사용한다.
        maximumTrackTintColor='blue'
        // slider에 색을 줄 때 사용한다.
        step={1}
        // slider의 움직이는 값을 설정할 때, step을 사용한다.
      />
      <Text style={styles.input}>{value}</Text>
      <ActivityIndicator
        // 서버에 자료를 요청할 때, 주로 사용한다. default 값을 true로 해두었다고 서버로부터 수신이 완료 되었을 때, false가 되도록 설정.
        size={'large'}
        color={'green'}
        animating={true}
        style={{ paddingTop: 10 }}
      />
      <Picker
        style={{ height: 50, width: 250 }}
        selectedValue={country}
        onValueChange={(val, idx) => setCountry(val)}>
        <Picker.Item label='Korea' value='korea' />
        <Picker.Item label='Canada' value='canada' />
        <Picker.Item label='Japan' value='japan' />
        <Picker.Item label='China' value='china' />
        <Picker.Item label='Mexico' value='mexico' />
        <Picker.Item label='USA' value='usa' />
        <Picker.Item label='England' value='england' />
        <Picker.Item label='France' value='france' />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 20,
  },
});
