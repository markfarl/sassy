import React, {useState, useEffect} from 'react';
import {useConfig, saveConfig} from '../../contexts/configContext';
import Button from '../../components/Button';
import HeaderText from '../../components/HeaderText';
import styles from '../../styles';
import InfoBox from '../../components/InfoBox';
import {SettingLockCode} from '../../components/SettingLockCode';
import {View, Text, ScrollView} from 'react-native';

const SetupLockCode = ({navigation}: any) => {
  const {config, setConfig}: any = useConfig();
  const [lockShow, setLockShow] = useState(false);

  const saveButton = () => {
    setConfig({
      ...config,
      setupComplete: true,
    });
    saveConfig({
      ...config,
      setupComplete: true,
    });
    // Move onto the next screen
    navigation.navigate('Home');
  };

  const goBack = () => {
    saveConfig(config);
    navigation.goBack();
  };

  useEffect(() => {
    saveConfig(config);
  }, [config]);

  return (
    <View style={styles.screen}>
      <HeaderText>Setup 3/3</HeaderText>
      <ScrollView
        style={styles.scrollBox}
        contentContainerStyle={styles.scrollBoxContainer}>
        <View style={styles.innerBox}>
          <SettingLockCode setLockShowParent={setLockShow}>
            Set screen unlock PIN for kiosk mode:
          </SettingLockCode>
          <InfoBox heading="Information" content="deiuideudeihu" />
        </View>
      </ScrollView>
      {!lockShow && (
        <View style={styles.footerTextBox}>
          <View style={styles.buttonFormBoxBottom}>
            <Button onPress={goBack}>BACK</Button>
            <Button onPress={saveButton}>SAVE</Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default SetupLockCode;
