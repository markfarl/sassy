import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import Button from '../../../components/Button';
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
        <Text style={[styles.testHeaderBlack]}>Setting up Sassy.</Text>
        <Text style={styles.textBlack}>
          On your fist time opening Sassy you will need to complete the setup, once done you may start the application. Any settings made during setup can be changed at anytime by going to the settings page.
        </Text>
        <Text style={styles.textBlack}>
          First thing you need to setup Sassy is a google analytics
          MeasurementID, if you do not have one please consult the documentation
          for setting up Google Analytics. All user feedback data is sent to Google Analytics and can be viewed there.
        </Text>
        <Text style={[styles.testHeaderBlack]}>Select face options.</Text>
        <Text style={styles.textBlack}>
          You can select the option of 2 - 5 faces, depending on what the user
          selects is the name of the event that will appear in the Analytics
          Events tracking. The full options up to 5 are: Sad, Slightly Sad,
          Neutral, Slighty Happy, Happy
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/1.png')}
        />
        <Text style={styles.textBlack}>
          You can change this at anytime in the settings.
        </Text>
        
      </View>
    </ScrollView>
  );
};

const Two = ({navigation}: any) => {
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
        <Text style={[styles.testHeaderBlack]}>Create Unlock Code</Text>
        <Text style={styles.textBlack}>
        When you have your app running, you do not want users to navigate out of it, therefore you can set a lock code. This will be required when you hit the home icon on the feedback page.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/2.png')}
        />
      </View>
    </ScrollView>
  );
};


export {One, Two};
