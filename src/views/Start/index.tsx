import React, {useState, useEffect} from 'react';
import {useConfig} from '../../contexts/configContext';
import {FACE_NAME} from '../../constants';
import {Face} from '../../components/Face';
import WebGA from '../../components/WebGA';
import styles from '../../styles';
import {Text, View, Dimensions, StatusBar} from 'react-native';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import SystemNavigationBar from 'react-native-system-navigation-bar';
// import RNLockTask from 'react-native-lock-task';


const getIsPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const Start = () => {
  const {config}: any = useConfig();
  const [eventFace, setEventFace] = useState<string>();
  const [isPortrait, setIsPortrait] = useState<boolean>(getIsPortrait);

  const enableKeepAwake = async () => {
    await activateKeepAwakeAsync();
  }
  enableKeepAwake();
  // RNLockTask.startLockTask();
  
  SystemNavigationBar.immersive();

  const gaCallback = (resp: any) => {
    console.log(resp.nativeEvent.data);
  };

  Dimensions.addEventListener('change', () => {
    setIsPortrait(getIsPortrait);
  });

  const sendToGa = (index: number) => {
    const adjusted = FACE_NAME[config.faces - 2][index];
    setEventFace(adjusted);
  };

  useEffect(() => {
    // Set event face to undefined after set so event inside webGa will always trigger
    setEventFace(undefined);
  }, [eventFace, Dimensions.get('screen')]);

  return (
    <View style={styles.screen}>
      <StatusBar hidden />
      <View style={isPortrait ? styles.playHeaderPrt : styles.playHeader}>
        <Text style={styles.textLarge}>{config.text}</Text>
      </View>
      <View
        style={
          isPortrait ? styles.playFacesContainerPrt : styles.playFacesContainer
        }>
        {[...Array(config.faces)].map((i, y) => {
          return (
            <Face
              key={y}
              index={y}
              faces={config.faces}
              onPress={() => sendToGa(y)}
            />
          );
        })}
      </View>
      <WebGA eventSelect={eventFace} callback={gaCallback} />
    </View>
  );
};

export default Start;
