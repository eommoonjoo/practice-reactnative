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

export default function Header(props) {
  const appname = props.appname;
  return (
    <TouchableWithoutFeedback onPressIn={() => alert('Hello World')}>
      {/* TouchableWithoutFeedback은 클릭을 실행했을 때, 배경화면이, 투명해지지 않게끔 할 때, 사용한다. 하지만 style을 사용할 수 없기 때문에 속해있는 View에 적용을 해야 한다. */}
      {/* onLongPress 는 오래눌러야 실행되는 함수를 의미한다.  */}
      {/* onPressIn 는 누르자마자 즉각적으로 실행되는 것을 의미한다. */}
      {/* onPressOut 는 누르는 손을 때자마자 실행되는 것을 의미한다. */}
      <View style={styles.header}>
        <Text>{appname}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});
