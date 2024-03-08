import {Text, View, Image, TextInput, ScrollView, Linking} from 'react-native';
import Button from '../../../components/Button';
import InfoBox from '../../components/InfoBox';
import styles from '../../../styles';
import HeaderText from '../../../components/HeaderText';

const gaLink = () => {
  Linking.openURL('https://analytics.google.com/');
};

const One = ({navigation}: any) => {
  const next = () => {
    navigation.navigate('2');
  };

  
  return (
    <>
    <Text style={[styles.testMainHeaderBlack]}>
          Setting up Google Analytics.
    </Text>
    <ScrollView
      style={[styles.scrollBox, styles.greyBkgrd]}
      contentContainerStyle={styles.scrollBoxContainer}>
      <View style={styles.innerHelpBox}>
        
        <Text style={styles.textBlack}>
          To use Sassy, you need a <Text style={styles.textBold}>Google Analytics </Text>account, this is free and
          easy to setup.
        </Text>
        <Text style={styles.textBlack}>
          To start go to <Text onPress={gaLink} style={[styles.textBlue, styles.textBold]}> https://analytics.google.com/ </Text> and create an account with
          any name you wish.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/1.png')}
        />
        <Text style={[styles.testHeaderBlack]}>
          Create a Property.
        </Text>
        <Text style={styles.textBlack}>
          Enter in a relevant property name for the data you wish to collect.
        </Text>
        <Text style={styles.textBlack}>
          You can create multiple properties per Google account but you can only
          send your Sassy feedback data to one property at a time.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/2.png')}
        />
        <Text style={styles.textBlack}>
          Fill in other other details relevant to your usage. These can be changed
          later and are not important to the function of the Sassy app.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/3.png')}
        />
        <Text style={[styles.testHeaderBlack]}>
          Choose your Business Objective.
        </Text>
        <Text style={styles.textBlack}>
          It is recommended to select the following option here: <Text style={styles.textBold}>Examine user behaviour</Text> 
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/4.png')}
        />
        <Text style={styles.testHeaderBlack}>Start Collecting Data.</Text>
        <Text style={styles.textBlack}>
        <Text style={styles.textBold}>**IMPORTANT***</Text> Make sure to select <Text style={styles.textBold}>Web</Text> here.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/5.png')}
        />
        <Text style={styles.textBlack}>
          Now fill in your website and stream name and create your stream.
        </Text>
        <Text style={styles.textBlack}>
          If you do not have a website, you can enter in <Text style={styles.textBold}>sassyhappy.eu</Text>
        </Text>
        <Text style={styles.textBlack}>Now hit Create Stream!</Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/6.png')}
        />
        
        <Text style={styles.textBlack}>
          Congratulations you now have your <Text style={styles.textBold}>measurementID!</Text>
        </Text>
        <Text style={styles.textBlack}>
          Save this <Text style={styles.textBold}>measurementID</Text> and enter it into your Sassy settings, it is
          how you track all your feedback.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/7.png')}
        />
        <Text onPress={next} style={[styles.textBlack, styles.textRight, styles.textBlue]}>
          Next: Setting up Sassy {'>>'}
        </Text>
      </View>
    </ScrollView>
    </>
  );
};

const Two = ({navigation}: any) => {
  const next = () => {
    navigation.navigate('3');
  };
  const prev = () => {
    navigation.navigate('1');
  };
  return (
    <>
    <Text style={[styles.testMainHeaderBlack]}>
          Setting up Sassy.
    </Text>
    <ScrollView
      style={[styles.scrollBox, styles.greyBkgrd]}
      contentContainerStyle={styles.scrollBoxContainer}>
      <View style={styles.innerHelpBox}>
      <Text style={styles.textBlack}>
          On your fist time opening Sassy you will need to complete setup, once complete you may start the application. Any settings made during setup can be changed at anytime by going to the settings page.
        </Text>
        <Text style={styles.textBlack}>
          First thing you need to setup Sassy is a Google Analytics 
          <Text style={styles.textBold}> MeasurementID</Text>, if you do not have one please consult the documentation
          for setting up Google Analytics. All user feedback data is sent to Google Analytics and can be viewed there.
          
        </Text>
        <Text onPress={prev} style={[styles.textBlack, styles.textBlue]}>{'<<'} Setting up Google Analytics </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/s1.png')}
        />
        
        <Text style={[styles.testHeaderBlack]}>Select face options.</Text>
        <Text style={styles.textBlack}>
          You can select the option of 2 - 5 faces.  The full options up to 5 are: Sad, Slightly Sad,
          Neutral, Slighty Happy, Happy
        </Text>
        <Text style={styles.textBlack}>
          Depending on what the user selects is the name of the event that will appear in the Analytics Events tracking.
        </Text>
        <Text style={styles.textBlack}>
        The full options up to 5 are: Sad, Slightly Sad, Neutral, Slighty Happy, Happy
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/s2.png')}
        />
        <Text style={styles.textBlack}>
          You can change this at anytime in the settings.
        </Text>
        <Text style={[styles.testHeaderBlack]}>Create Unlock Code</Text>
        <Text style={styles.textBlack}>
        When you have your app running, you do not want users to navigate out of it, therefore you can set a lock code. This will be required when you hit the home icon on the feedback page.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/s3.png')}
        />
        <Text style={[styles.testHeaderBlack]}>Start app and collect data</Text>
        <Text style={styles.textBlack}>
        Your app is now ready to start and collect feedback data from your customers. 
        When running the main application, to return to home screen simply click the home icon on the bottom right of the screen and enter in your unlock code.
        </Text>
        <Text style={styles.textBlack}>
          To view your feedback response data, you need to open up Google Analytics.
        </Text>
        <Text onPress={next} style={[styles.textBlack, styles.textRight, styles.textBlue]}>
          Next: Viewing Google Analytics {'>>'}
        </Text>
      </View>
    </ScrollView>
    </>
  );
};

const Three = ({navigation}: any) => {
  const next = () => {
    navigation.navigate('2');
  };
  return (
    <>
    <Text style={[styles.testMainHeaderBlack]}>
          How to View Analytics.
    </Text>
    <ScrollView
      style={[styles.scrollBox, styles.greyBkgrd]}
      contentContainerStyle={styles.scrollBoxContainer}>
      <View style={styles.innerHelpBox}>
        <Text style={[styles.textBlack]}>
          Viewing your feedback data in Google Analytics is easy. 
        </Text>
        <Text style={[styles.textBlack]}>
        <Text style={styles.textBold}>Please note</Text> that data can take a couple of hours from interactions to show up in the reports.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/a1.png')}
        />
        <Text style={styles.textBlack}>First open up <Text onPress={gaLink} style={[styles.textBlue, styles.textBold]}> https://analytics.google.com/ </Text> and select your account and property that you setup for Sassy.</Text>
        <Text style={styles.textBlack}>
        Then select: 
        </Text>
        <Text style={[styles.textBlack, styles.textBold]}> Reports {'>>'} Examine User Behaviour {'>>'} Events.</Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/a2.png')}
        />
        <Text style={styles.textBlack}>
        Filter by dates and time as you need.
        </Text>
        <Image
          style={styles.helpImage}
          source={require('../../../assets/help/a3.png')}
        />
        <Text style={styles.textBlack}>
         You can check Google Analytics Documentation for more information.
        </Text>
      </View>
    </ScrollView>
    </>
  );
};



export {One, Two, Three };
