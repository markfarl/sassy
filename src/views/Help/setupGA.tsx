import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {One, Two, Three} from './SetupGAPage';
import { View } from 'react-native';
import styles from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator();
const SetupGA = ({navigation}: any) => {
  return (
    <View style={styles.screenTab}>
      <Tab.Navigator>
        <Tab.Screen name="1" component={One} />
        <Tab.Screen name="2" component={Two} />
        <Tab.Screen name="3" component={Three} />
      </Tab.Navigator>
      <View style={styles.helpHeader}>
          <Icon onPress={navigation.goBack} name="closecircle" size={30} color="#333" />
      </View>
    </View>
  );
};

export default SetupGA;
