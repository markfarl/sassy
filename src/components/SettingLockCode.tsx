import React, {useState, useEffect} from 'react';
import {useConfig, saveConfig} from '../contexts/configContext';
import styles from '../styles';
import {View, Text} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Icon from 'react-native-vector-icons/AntDesign';

const SettingLockCode = ({children, setLockShowParent}: any) => {
    const {config, setConfig}: any = useConfig();
    const [lock, setLock] = useState('');
    const [lockShow, setLockShow] = useState(false);

    const showLock = () => {
        setLockShow(true);
        setLockShowParent(true);
      };
    
    const setCode = (code: string) => {
        if (code.length !== 4) {
            setConfig({
            ...config,
            code: '0000',
            });
        }
        setConfig({
            ...config,
            code,
        });
        setLockShow(false);
        setLockShowParent(false);
        setLock('');
    };

    useEffect(() => {
        saveConfig(config);
    }, [config]);

    return(
        <View>
            <Text style={[styles.text, styles.marginTop]}>
            {children}
            </Text>
            {!lockShow && (
            <View style={styles.lockCodeContain}>
                <Text onPress={showLock} style={styles.lockCodeNumber}>
                {config.code.substr(0, 1)}
                </Text>
                <Text onPress={showLock} style={styles.lockCodeNumber}>
                {config.code.substr(1, 1)}
                </Text>
                <Text onPress={showLock} style={styles.lockCodeNumber}>
                {config.code.substr(2, 1)}
                </Text>
                <Text onPress={showLock} style={styles.lockCodeNumber}>
                {config.code.substr(3, 1)}
                </Text>
                <Text
                onPress={showLock}
                style={[styles.lockCodeNumber, styles.noBorder]}>
                <Icon name="edit" size={30} color="#fff" />
                </Text>
            </View>
            )}
            <View style={styles.lockCodeContain}>
            {lockShow && (
                <SmoothPinCodeInput
                ref={() => {
                    console.log('a');
                }}
                value={lock}
                autoFocus={true}
                onTextChange={setLock}
                cellSize={65}
                restrictToNumbers={true}
                style={styles.lockCodeContain}
                cellStyle={styles.lockCode}
                textStyle={styles.lockCodeText}
                onFulfill={setCode}
                />
            )}
            </View>
      </View>
    )
}

export { SettingLockCode };