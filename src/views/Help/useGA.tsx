import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {One, Two, Three, Four} from './SetupGAPage';
import {View} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const UseGA = ({navigation}: any) => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name="1" component={One} />
        <Tab.Screen name="2" component={Two} />
        <Tab.Screen name="3" component={Three} />
        <Tab.Screen name="4" component={Four} />
      </Tab.Navigator>
    </View>
  );
};

export default UseGA;
