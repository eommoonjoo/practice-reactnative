import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView, //안드로이드에서는 안됩니다. 안드로이드에서 하는 방법을 찾을 필요가 있습니다.
} from 'react-native';
import Header from './src/Header';
import Generator from './src/Generator';
import Numblist from './src/Numlist';
import Input from './src/Input';
import Picker from './src/Picker';
import Icon from './assets/icon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function App() {
  const [appname, setAppname] = useState('My first App');
  const [random, setRandom] = useState([36, 999]);
  const [myTextInput, setMyTextInput] = useState('asdfasdf');
  const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd']);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('username', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('username');
      if (jsonValue != null) {
        Alert.alert(JSON.parse(jasonValue).name);
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    // setRandom(random.concat(randomNum));
    setRandom([...random, randomNum]);
  };

  const onNumDelete = (position) => {
    const newArray = alphabet.filter((ele, index) => {
      return position != index;
    });
    setAlphabet(newArray);
  };

  const onChangeInput = (event) => {
    // setMyTextInput({ myTextInput: event });
    setMyTextInput(event);
  };

  const onAddTextInput = () => {
    setMyTextInput('');
    setAlphabet([...alphabet, myTextInput]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header appname={appname} />
      <View>
        <Text onPress={() => alert('text touch event')}>Hello World</Text>
      </View> */}
      {/* <Generator add={onAddRandomNum} />
      <ScrollView style={{ width: '100%' }} bounces={true}> */}
      {/* onMometumScrollBegin는 스크롤이 움직이기 시작할 때 트리거를 한다. */}
      {/* onMomentumScrollEnd는 스크롤의 움직임이 끝낱을 때, 트리거를 한다. */}
      {/* onScroll는 스크롤의 움직임이 발생했을 때, 바로 트리거를 발생한다. */}
      {/* onContentSizeChange는 인자로 width, height값을 갖고, 움직일 때마다, 변화된 사이즈를 트리거 한다. */}
      {/* bounces는 마지막에 통통 튀도록 하는 것을 의미한다. */}
      {/* <Numblist num={random} delete={onNumDelete} /> */}
      {/* </ScrollView> */}

      <Picker />

      <TextInput
        value={myTextInput}
        style={styles.input}
        onChangeText={onChangeInput}
        multiline={true} //개행을 해줌
        maxLength={100} //100개까지 입력
        autoCapitalize={'none'} //자동으로 대문자 자동수정을 안함.
        editable={true} // false이면 입력이 안됩니다.
      />
      <Button title='To Do List' onPress={onAddTextInput} />

      <ScrollView style={{ width: '100%' }}>
        {alphabet.map((item, idx) => (
          <Text
            style={styles.mainText}
            key={idx}
            onPress={() => onNumDelete(idx)}>
            {item}
          </Text>
        ))}
      </ScrollView>
      <>
        <TouchableOpacity onPress={() => storeData({ name: '엄문주' })}>
          <Text>정보저장</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getData}>
          <Text>정보가져오기</Text>
        </TouchableOpacity>
      </>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/id/237/200/300' }}
        onLoadEnd={() => alert('image loaded')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    width: '90%',
    backgroundColor: '#cecece',
    fontSize: 25,
    padding: 10,
    margin: 10,
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    padding: 20,
    margin: 20,
    backgroundColor: 'gray',
  },

  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

// {/* <Text>Open up App.js to start working on your app!</Text>
//     <StatusBar style='auto' /> */}
//     <View style={styles.container}>
//       {/* url이미지를 불러오려면, uri를 사용해야 하고, 중괄호를 두개 사용해야 한다. */}

//       {/* 로컬상에서 이미지를 불러오려면, require를 사용해야 하고 중괄호는 하나만 있으면 된다.  */}

//         {/* View를 하나의 divㄹ */}
//         <Header appname={appname} />
//         {/* TouchableOpacity는 react상에서 onClick으로 생각하면 된다. 그리고, activeOpacity는 버튼의 깜빡임을 조절 할 때, 사용한다.  */}
//       </View>

// setRandom((prevState)=> {
//   return {
//     random: [...prevState.random, randomNum]
//   }
// })
// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [imgUri, setImgUri] = useState('');

//   const cameraRef = useRef();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takepicture = async () => {
//     // await cameraRef.takePictureAsync()
//     console.log(cameraRef);
//     if (cameraRef) {
//       const result = await cameraRef.current.takePictureAsync();
//       setImgUri(result.uri);
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type} ref={cameraRef}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={styles.text}> Flip </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={takepicture}>
//             <Text style={styles.text}> 사진찍기 </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//       {imgUri ? <Image style={styles.img} source={{ uri: imgUri }} /> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 0.5,
//   },
//   buttonContainer: {
//     backgroundColor: 'red',
//     marginTop: 30,
//     height: 90,
//     width: 90,
//     padding: 8,
//   },
//   button: {},

//   img: {
//     flex: 0.5,
//   },
// });
