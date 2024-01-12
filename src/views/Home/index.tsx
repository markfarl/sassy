import React from 'react';
import Button from '../../components/Button';
import {useConfig} from '../../contexts/configContext';
import HeaderText from '../../components/HeaderText';
import styles from '../../styles';
import {View, Text, Image} from 'react-native';

const Home = ({navigation}) => {
  const {config} = useConfig();

  const setup = () => {
    navigation.navigate('Setup');
  };
  const settings = () => {
    navigation.navigate('Settings');
  };
  const start = () => {
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
              <Text style={styles.subHeader} >Satisfaction Feedback App.</Text>
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
