import React from 'react';
import {useConfig} from '../contexts/configContext';
import styles from '../styles';
import {Text, TextInput, View} from 'react-native';

const SettingGAID = ({children}) => {
  const {config, setConfig} = useConfig();

  return (
    <View>
      <Text style={[styles.text, styles.marginTop]}>{children}</Text>
      <TextInput
        name="gaId"
        value={config.gaId}
        onChangeText={e =>
          setConfig({
            ...config,
            gaId: e,
          })
        }
        style={styles.textInput}
      />
    </View>
  );
};

export default SettingGAID;
