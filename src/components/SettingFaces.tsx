import React from 'react';
import {useConfig} from '../contexts/configContext';
import styles from '../styles';
import {Text, View} from 'react-native';
import {Slider} from '@react-native-assets/slider';

const SettingFaces = ({children}) => {
  const {config, setConfig} = useConfig();

  return (
    <View>
      <Text style={[styles.text, styles.marginTop]}>{children}</Text>
      <View style={[styles.flex, styles.marginTop]}>
        <Slider
          style={styles.long}
          minimumValue={2}
          maximumValue={5}
          step={1}
          minimumTrackTintColor="#999" // The track color before the current value
          maximumTrackTintColor="#999" // The track color after the current value
          thumbTintColor="#fff"
          value={config.faces}
          onValueChange={e =>
            setConfig({
              ...config,
              faces: e,
            })
          }
        />
        <Text style={[styles.textLarge, styles.textCenter, styles.short]}>
          {config.faces}
        </Text>
      </View>
    </View>
  );
};

export default SettingFaces;
