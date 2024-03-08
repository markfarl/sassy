import React from 'react';
import {useConfig, saveConfig} from '../../contexts/configContext';
import Button from '../../components/Button';
import HeaderText from '../../components/HeaderText';
import InfoBox from '../../components/InfoBox';
import SettingGAID from '../../components/SettingGAID';
import styles from '../../styles';
import {View, ScrollView, Text} from 'react-native';

const Setup = ({navigation}: any) => {
  const {config}: any = useConfig();

  const saveButton = () => {
    // **TODO** Verify GA value
    // Save and Nav next
    saveConfig(config);
    // Move onto the next screen
    navigation.navigate('SetupFaces');
  };
  const helpGa = () => {
    navigation.navigate('SetupGA', { screen: '1' });
  };
  const info = `You need a Google Analytics Measurment ID to view the captured interactions and data with your App.
It is free to setup a Google Analytics 4 Account and start collecting Data.
For a tutorial on how to setup GA4 account click here. `;

  return (
    <View style={styles.screen}>
      <HeaderText>Setup 1/3</HeaderText>
      <ScrollView
        style={styles.scrollBox}
        contentContainerStyle={styles.scrollBoxContainer}>
        <View style={styles.innerBox}>
          <SettingGAID>Enter your Google Analytics Measurment ID:</SettingGAID>
          <InfoBox onPress={helpGa} heading="Information" content={info} />
        </View>
      </ScrollView>
      <View style={styles.footerTextBox}>
        <View style={styles.buttonFormBoxBottom}>
          <Button onPress={navigation.goBack}>BACK</Button>
          <Button onPress={saveButton}>NEXT</Button>
        </View>
      </View>
    </View>
  );
};

export default Setup;
