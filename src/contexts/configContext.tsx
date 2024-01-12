import React, {useContext, createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigContext = createContext({});
const useConfig = () => useContext(ConfigContext);

const saveConfig = (config: any) => {
  console.log('saveConfig', config);
  AsyncStorage.setItem('config', `${JSON.stringify(config)}`);
};

const ConfigContextProvider = ({children}: any) => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('config').then(value => {
      console.log(value);
      if (value) {
        console.log('value');
        console.log(value);
        setConfig(JSON.parse(value));
      } else {
        // Default Values
        setConfig({
          gaId: null,
          faces: 3,
          setupComplete: false,
          text: 'Please give your feedback:',
          code: '0000',
        });
      }
    });
  }, []);

  return (
    <ConfigContext.Provider value={{config, setConfig}}>
      {children}
    </ConfigContext.Provider>
  );
};

export {useConfig, saveConfig, ConfigContextProvider};
