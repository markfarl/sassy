import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import styles from '../styles';

const Button = ({custom = null, onPress, children}: any) => {
  const touchProps = {
    activeOpacity: 1,
    underlayColor: '#ddd',
    style: [styles.button, custom],
    onPress: onPress,
  };

  return (
    <TouchableHighlight {...touchProps}>
      <Text style={[styles.textCenter, styles.textButton, custom]}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
