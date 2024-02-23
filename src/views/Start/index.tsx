import React, {useState, useEffect} from 'react';
import {useConfig} from '../../contexts/configContext';
import {FACE_NAME} from '../../constants';
import {Face} from '../../components/Face';
import WebGA from '../../components/WebGA';
import styles from '../../styles';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  Alert,
  BackHandler,
} from 'react-native';
import {activateKeepAwakeAsync, deactivateKeepAwake} from 'expo-keep-awake';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const getIsPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const Start = ({navigation}: any) => {
  const {config}: any = useConfig();
  const [lockShow, setLockShow] = useState(false);
  const [lock, setLock] = useState('');
  const [eventFace, setEventFace] = useState<string>();
  const [isPortrait, setIsPortrait] = useState<boolean>(getIsPortrait);

  const enableKeepAwake = async () => {
    await activateKeepAwakeAsync();
  };

  SystemNavigationBar.stickyImmersive();
  enableKeepAwake();

  const gaCallback = (resp: any) => {
    console.log(resp.nativeEvent.data);
  };

  const goHome = () => {
    setLockShow(lockShow ? false : true);
    return true;
  };

  const checkCode = (code: string) => {
    setLock('');
    setLockShow(false);
    if (code == config.code) {
      // code correct Homepage

      navigation.navigate('Home');
      SystemNavigationBar.navigationShow();
    } else {
      // alert code inccorect
      Alert.alert('Wrong Unlock Code', 'Please try again to exit');
    }
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', goHome);

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
    <>
      {lockShow && (
        <View style={styles.lockCodeContainOverlay}>
          <Text style={styles.textLarge}>Enter unlock code to exit</Text>
          <SmoothPinCodeInput
            ref={() => {
              console.log('a');
            }}
            value={lock}
            autoFocus={true}
            onTextChange={setLock}
            cellSize={65}
            restrictToNumbers={true}
            style={styles.lockCodeContain}
            cellStyle={styles.lockCode}
            textStyle={styles.lockCodeText}
            onFulfill={checkCode}
          />
        </View>
      )}
      <View style={styles.screen}>
        <StatusBar hidden />
        <View style={isPortrait ? styles.playHeaderPrt : styles.playHeader}>
          <Text style={styles.textLarge}>{config.text}</Text>
        </View>
        <View
          style={
            isPortrait
              ? styles.playFacesContainerPrt
              : styles.playFacesContainer
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

        <View style={isPortrait ? styles.playFooter : styles.playFooter}>
          <Icon onPress={goHome} name="home" size={40} color="#cbb" />
        </View>
        <WebGA eventSelect={eventFace} callback={gaCallback} />
      </View>
    </>
  );
};

export default Start;
