import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import Button from '../../../components/Button';
import InfoBox from '../../components/InfoBox';
import styles from '../../../styles';
import HeaderText from '../../../components/HeaderText';



const One = ({navigation}: any) => {
    const next = () => {
        navigation.navigate('2');
    };
    return (
        <ScrollView
        style={[styles.scrollBox, styles.greyBkgrd]}
        contentContainerStyle={styles.scrollBoxContainer}>
            <View style={styles.innerHelpBox}>
                <Text style={[styles.testHeaderBlack]}>
                    Setting up Google Analytics.
                </Text>
                <Text style={styles.textBlack}>
                    To use Sassy, you need a google analytics account, this is free and easy to setup.
                </Text>
                <Text style={styles.textBlack}>
                    To start goto https://analytics.google.com/
                    And create an account with any name you wish
                </Text>
                <Image
                    style={styles.helpImage}
                    source={require('../../../assets/help/1.png')}   
                />
            </View>
        </ScrollView>
    )
};

const Two = ({}) => {  
    return (
        <Text>
            Two
        </Text>
    )
};
const Three = ({}) => {  
    return (
        <Text>
            Three
        </Text>
    )
};
const Four = ({}) => {  
    return (
        <Text>
            Four
        </Text>
    )
};

export { One, Two, Three, Four };