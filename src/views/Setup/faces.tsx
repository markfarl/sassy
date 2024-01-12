import React, {useEffect} from 'react';
import {useConfig, saveConfig} from '../../contexts/configContext';
import Button from '../../components/Button';
import SettingFaces from '../../components/SettingFaces';
import HeaderText from '../../components/HeaderText';
import {FacePreview} from '../../components/Face';
import styles from '../../styles';
import {View, Text, ScrollView} from 'react-native';

const SetupFaces = ({navigation}: any) => {
  const {config, setConfig}: any = useConfig();

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
    navigation.navigate('SetupLockCode');
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
      <HeaderText>Setup 2/3</HeaderText>
      <ScrollView
        style={styles.scrollBox}
        contentContainerStyle={styles.scrollBoxContainer}>
        <View style={styles.innerBox}>
          <SettingFaces>How many feedback faces? ( 2-5 )</SettingFaces>
          <View style={styles.infoBox}>
            <Text style={[styles.text, styles.bold]}> Preview</Text>
            <View style={styles.playFacesContainerPreview}>
              {[...Array(config.faces)].map((i, y) => {
                return <FacePreview key={y} index={y} faces={config.faces} />;
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerTextBox}>
        <View style={styles.buttonFormBoxBottom}>
          <Button onPress={goBack}>BACK</Button>
          <Button onPress={saveButton}>Next</Button>
        </View>
      </View>
    </View>
  );
};

export default SetupFaces;
