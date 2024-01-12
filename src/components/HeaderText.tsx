import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeaderText = ({children}): React.JSX.Element => {
  return (
    <View style={styles.headerTextBox}>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.hr} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {fontSize: 22, color: '#111', marginTop: 20, marginLeft: '5%'},
  hr: {
    borderBottomColor: '#111',
    borderBottomWidth: 2,
    marginTop: 10,
    width: '100%',
  },
  headerTextBox: {
    width: '100%',
    minHeight: 50,
  },
});
export default HeaderText;
