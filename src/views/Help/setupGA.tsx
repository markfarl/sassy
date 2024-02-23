import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {One, Two, Three, Four, Five} from './SetupGAPage';
import {Text, View, Image, ScrollView} from 'react-native';
import Button from '../../components/Button';
import styles from '../../styles';
import HeaderText from '../../components/HeaderText';

const Tab = createMaterialBottomTabNavigator();
const SetupGA = ({navigation}: any) => {
  return (
    <View style={styles.screenTab}>
      <Tab.Navigator>
        <Tab.Screen name="1" component={One} />
        <Tab.Screen name="2" component={Two} />
        <Tab.Screen name="3" component={Three} />
        <Tab.Screen name="4" component={Four} />
        <Tab.Screen name="5" component={Five} />
      </Tab.Navigator>
      <View style={[styles.footerTextBox, styles.greyBkgrd]}>
        <View style={styles.buttonFormBoxBottom}>
          <Button onPress={navigation.goBack}>Close</Button>
        </View>
      </View>
    </View>
  );
};

export default SetupGA;
