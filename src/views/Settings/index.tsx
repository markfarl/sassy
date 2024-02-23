import React, {useState} from 'react';
import {useConfig, saveConfig} from '../../contexts/configContext';
import Button from '../../components/Button';
import HeaderText from '../../components/HeaderText';
import {FacePreview} from '../../components/Face';
import SettingGAID from '../../components/SettingGAID';
import SettingFaces from '../../components/SettingFaces';
import {SettingLockCode} from '../../components/SettingLockCode';
import styles from '../../styles';
import {Text, View, TextInput, ScrollView} from 'react-native';

const Settings = ({navigation}: any) => {
  const {config, setConfig}: any = useConfig();
  const [showNav, setShowNav] = useState(true);

  const saveButton = () => {
    // Verify GA value
    saveConfig(config);
    // Move onto the next screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.screen}>
      <HeaderText style={styles.headerTextBox}>Settings</HeaderText>
      <ScrollView
        style={styles.scrollBox}
        contentContainerStyle={styles.scrollBoxContainer}>
        <View style={styles.innerBox}>
          <SettingGAID>Google Analytics MeasurmentId:</SettingGAID>
          <SettingFaces>Feedback faces: ( 2-5 )</SettingFaces>
          <View style={styles.infoBox}>
            <Text style={styles.text}>Preview.</Text>
            <View style={styles.playFacesContainerPreview}>
              {[...Array(config.faces)].map((i, y) => {
                return <FacePreview key={y} index={y} faces={config.faces} />;
              })}
            </View>
          </View>
          <SettingLockCode setLockShowParent={setShowNav}>
            Set Lock Code:
          </SettingLockCode>
          <Text style={[styles.text, styles.marginTop]}>Feedback Text:</Text>
          <TextInput
            name="gaId"
            value={config.text}
            onChangeText={e =>
              setConfig({
                ...config,
                text: e,
              })
            }
            style={styles.textInput}
          />
        </View>
        <Text style={[styles.text, styles.marginTop]} />
      </ScrollView>
      <View style={styles.footerTextBox}>
        <View style={styles.buttonFormBoxBottom}>
          <Button onPress={navigation.goBack}>Close</Button>
          <Button onPress={saveButton}>Save</Button>
        </View>
      </View>
    </View>
  );
};

export default Settings;
