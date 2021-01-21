import React, { useState } from 'react';
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

export default function Modal() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    const clickModal = modal ? true : false;
    setModal(clickModal);
  };

  return (
    <View style={styles.mainView}>
      <Button title='Open Modal' onPress={handleModal} />
      <Modal visible={modal}>
        <View style={{ marginTop: 60, backgroundColor: 'red' }}>
          <Text>This is modal content</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {},
});
