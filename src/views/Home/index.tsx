import React from 'react';
import Button from '../../components/Button';
import {useConfig} from '../../contexts/configContext';
import HeaderText from '../../components/HeaderText';
import styles from '../../styles';
import {View, Text, Image, Alert} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Home = ({navigation}: any) => {
  const {config}: any = useConfig();

  SystemNavigationBar.navigationShow();

  const setup = () => {
    navigation.navigate('Setup');
  };
  const settings = () => {
    navigation.navigate('Settings');
  };
  const start = () => {
    Alert.alert(
      `Unlock Code: ${config.code}`,
      `Remember unlock code ${config.code} to return to the home screen`,
    );
    navigation.navigate('Start');
  };
  const help = () => {
    navigation.navigate('Help');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.subHeader}>Satisfaction Feedback App.</Text>
        <Text style={styles.subSubHeader}>
          With Google Analytics Integration.
        </Text>
        <View style={styles.innerBox}>
          {config.setupComplete ? (
            <>
              <View style={styles.buttonFormBox}>
                <Button custom={styles.wide} onPress={start}>
                  Start
                </Button>
              </View>
              <View style={styles.buttonFormBox}>
                <Button custom={styles.wide} onPress={settings}>
                  Settings
                </Button>
              </View>
            </>
          ) : (
            <View style={styles.buttonFormBox}>
              <Button custom={styles.wide} onPress={setup}>
                Setup
              </Button>
            </View>
          )}
          <View style={styles.buttonFormBox}>
            <Button custom={styles.wide} onPress={help}>
              Help
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
