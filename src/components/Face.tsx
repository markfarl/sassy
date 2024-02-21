import React from 'react';
import {useState} from 'react';
import {
  TouchableHighlight,
  ImageBackground,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {IMAGE_FACE, FACE_NAME} from '../constants';

const FacePreview = ({index, faces}: any) => {
  const adjusted = FACE_NAME[faces - 2][index];
  const faceIndex = faces - 2;
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button}>
        <ImageBackground
          style={styles.image}
          source={IMAGE_FACE[faceIndex][index]}
        />
      </TouchableHighlight>
      <Text style={styles.textSmall}>{adjusted}</Text>
    </View>
  );
};

const Face = ({custom, onPress, faces, index}: any) => {
  const [isPress, setIsPress] = useState(false);
  const faceIndex = faces - 2;

  const touchProps = {
    activeOpacity: 1,
    underlayColor: '#ddd',
    style: [styles.button, custom],
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: onPress,
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight {...touchProps}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={
            isPress
              ? IMAGE_FACE[faceIndex][index + faces]
              : IMAGE_FACE[faceIndex][index]
          }
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  textSmall: {
    fontSize: 10,
    height: 30,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    maxHeight: '100%',
    aspectRatio: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: '#000',
  },
});

export {Face, FacePreview};
