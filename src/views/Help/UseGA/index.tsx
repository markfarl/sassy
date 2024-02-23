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
          To use Sassy, you need a google analytics account, this is free and
          easy to setup.
        </Text>
        <Text style={styles.textBlack}>
          To start goto https://analytics.google.com/ And create an account with
          any name you wish
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/1.png')}
        />
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
        <Text style={styles.textBlack}>
          Enter in a relevant property name for the data you wish to collect.
        </Text>
        <Text style={styles.textBlack}>
          You can create multiple properties per Google account but you can only
          send your Sasy feedback data to one property at a time.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/2.png')}
        />
        <Text style={styles.textBlack}>
          Fill in other details relevant to your usage. These can be changed
          later and are not important to the function of the Sassy app.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/3.png')}
        />
      </View>
    </ScrollView>
  );
};

const Three = ({navigation}: any) => {
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
        <Text style={styles.textBlack}>Choose your business objective.</Text>
        <Text style={styles.textBlack}>
          It is recommended to select the following option here.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/4.png')}
        />
      </View>
    </ScrollView>
  );
};

const Four = ({navigation}: any) => {
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
        <Text style={styles.textBlack}>Start Collecting Data</Text>
        <Text style={styles.textBlack}>
          **IMPORTANT*** Make sure to select WEB here.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/5.png')}
        />
        <Text style={styles.textBlack}>
          Then fill in your website and stream name and create your stream
        </Text>
        <Text style={styles.textBlack}>
          If you do not have a website, enter in sassyhappy.eu
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/6.png')}
        />
        <Text style={styles.textBlack}>Then hit Create Stream!</Text>
      </View>
    </ScrollView>
  );
};

const Five = ({navigation}: any) => {
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
          Congratulations you can now get your measurementID!
        </Text>
        <Text style={styles.textBlack}>
          Save this measurement ID and enter it into the Sassy settings, it is
          how you can track all your feedback
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/7.png')}
        />
      </View>
    </ScrollView>
  );
};

const Six = ({navigation}: any) => {
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
          To use Sassy, you need a google analytics account, this is free and
          easy to setup.
        </Text>
        <Text style={styles.textBlack}>
          To start goto https://analytics.google.com/ And create an account with
          any name you wish
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/6.png')}
        />
      </View>
    </ScrollView>
  );
};

const Seven = ({navigation}: any) => {
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
          To use Sassy, you need a google analytics account, this is free and
          easy to setup.
        </Text>
        <Text style={styles.textBlack}>
          To start goto https://analytics.google.com/ And create an account with
          any name you wish
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/7.png')}
        />
      </View>
    </ScrollView>
  );
};

export {One, Two, Three, Four, Five};
