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
import { useState } from 'react';

export default function Imput(props) {
  const [myTextInput, setMyTextInput] = useState('asdfasdf');

  const onChangeInput = (event) => {
    setMyTextInput({ myTextInput: event });
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        value={myTextInput}
        style={styles.input}
        onChange={onChangeInput}
        multiline={true} //개행을 해줌
        maxLength={100} //100개까지 입력
        autoCapitalize={'none'} //자동으로 대문자 자동수정을 안함.
        editable={true} // false이면 입력이 안됩니다.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },

  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});
