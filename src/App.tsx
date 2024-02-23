import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ConfigContextProvider} from './contexts/configContext';
import Home from './views/Home';
import Setup from './views/Setup';
import Settings from './views/Settings';
import Help from './views/Help';
import SetupFaces from './views/Setup/faces';
import SetupLockCode from './views/Setup/lockcode';
import Start from './views/Start';
import SetupGA from './views/Help/setupGA';
import setupSassy from './views/Help/setupSassy';
import UseGA from './views/Help/useGA';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ConfigContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Setup" component={Setup} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="SetupFaces" component={SetupFaces} />
          <Stack.Screen name="SetupLockCode" component={SetupLockCode} />
          <Stack.Screen name="SetupGA" component={SetupGA} />
          <Stack.Screen name="setupSassy" component={setupSassy} />
          <Stack.Screen name="UseGA" component={UseGA} />
          <Stack.Screen
            name="Start"
            component={Start}
            options={{animation: 'none'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ConfigContextProvider>
  );
};

export default App;
