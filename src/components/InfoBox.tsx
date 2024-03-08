import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const InfoBox = ({heading, content, onPress}: any): React.JSX.Element => {
  return (
    <View style={styles.infoBox}>
      <Icon name="info-circle" size={30} color="#111">
        <Text style={[styles.text, styles.bold]}> {heading}</Text>
      </Icon>
      <Text onPress={onPress} style={styles.text}>{content}</Text>
    </View>
  );
};

export default InfoBox;
