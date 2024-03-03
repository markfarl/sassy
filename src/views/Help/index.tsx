import Button from '../../components/Button';
import HeaderText from '../../components/HeaderText';
import styles from '../../styles';
import {View, Text, ScrollView} from 'react-native';

const Home = ({navigation}) => {
  const setup = () => {
    navigation.navigate('SetupGA', { screen: '1' });
  };
  const setupSassy = () => {
    navigation.navigate('SetupGA', { screen: '2' });
  };
  const viewAnalytics = () => {
    navigation.navigate('SetupGA', { screen: '3' });
  };
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollBox}
        contentContainerStyle={styles.scrollBoxContainer}>
        <HeaderText>Help Topics</HeaderText>
        <View style={styles.innerBox}> 
          <View style={styles.buttonFormBox}>
            <Button custom={styles.wide} onPress={setup}>
              Setting up Google Analytics
            </Button>
          </View>
          <View style={styles.buttonFormBox}>
            <Button custom={styles.wide} onPress={setupSassy}>
              Setting up Sassy
            </Button>
          </View>
          <View style={styles.buttonFormBox}>
            <Button custom={styles.wide} onPress={viewAnalytics}>
              How to view Analytics
            </Button>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerTextBox}>
        <View style={styles.buttonFormBoxBottom}>
          <Button onPress={navigation.goBack}>Close</Button>
        </View>
      </View>
    </View>
  );
};

export default Home;
