import {StyleSheet} from 'react-native';
const mainFontColor = '#001';
// const mainBkGrd = '#fddbc3';
const mainBkGrd = '#fddbc3';
const lightBkGrd = '#f9e7e0';
const borderColor = '#334';
const fontColor = '#334';

const styles = StyleSheet.create({
  playHeader: {
    height: '20%',
    width: '99%',
    paddingTop: 25,
    paddingLeft: 25,
  },
  playFacesContainer: {
    flexDirection: 'row',
    height: '70%',
    width: '99%',
  },
  playFacesContainerPreview: {
    flexDirection: 'row',
  },
  playHeaderPrt: {
    height: '15%',
    width: '99%',
    paddingTop: 25,
    paddingLeft: 25,
  },
  playFacesContainerPrt: {
    flexDirection: 'column',
    height: '80%',
    width: '99%',
  },
  screen: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: mainBkGrd,
  },
  screenTab: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: mainBkGrd,
  },
  footerTextBox: {
    borderTopColor: '#111',
    borderTopWidth: 2,
    width: '100%',
    minHeight: 70,
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  noBorder: {
    borderWidth: 0,
  },
  scrollBox: {
    height: '75%',
    width: '100%',
  },
  scrollBoxContainer: {
    alignItems: 'center',
  },
  innerBox: {
    width: '90%',
  },
  innerHelpBox: {
    margin: 20,
    maxWidth: '90%',
  },
  marginTop: {
    marginTop: 20,
  },
  web: {
    height: 200,
    width: 500,
    borderWidth: 2,
    borderColor: borderColor,
  },
  text: {
    fontSize: 14,
    color: fontColor,
  },
  bold: {
    fontWeight: 'bold',
  },
  textLarge: {
    fontSize: 33,
    color: fontColor,
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonFormBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonFormBoxBottom: {
    width: '80%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  hrBottom: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    marginTop: 15,
    width: '100%',
  },
  wide: {
    width: '100%',
    borderRadius: 25,
    padding: 7,
  },
  button: {
    color: '#fff',
    marginTop: 10,
    width: '45%',
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: borderColor,
    marginLeft: '5%',
  },
  textInput: {
    marginTop: 20,
    width: '100%',
    fontSize: 16,
    color: '#111',
    backgroundColor: '#fff',
    padding: 5,
    borderColor: borderColor,
    borderWidth: 1,
  },
  short: {
    width: '25%',
  },
  lockCodeContain: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  lockCodeNumber: {
    flex: 1,
    borderColor: borderColor,
    borderWidth: 2,
    marginRight: 5,
    fontSize: 46,
    color: '#334',
    textAlign: 'center',
  },
  lockCode: {
    borderColor: borderColor,
    borderWidth: 2,
  },
  lockCodeText: {
    color: '#fff',
    fontSize: 46,
  },
  long: {
    width: '75%',
  },
  flex: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  infoBox: {
    marginTop: 25,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: borderColor,
    backgroundColor: lightBkGrd,
  },
  testHeaderBlack: {
    fontSize: 26,
    color: '#111',
    marginBottom: 20,
  },
  textBlack: {
    fontSize: 14,
    color: '#111',
    marginBottom: 10,
  },
  textButton: {
    fontSize: 22,
    fontWeight: '400',
    color: mainFontColor,
  },
  helpImage: {
    width: null,
    maxHeight: 350,
    resizeMode: 'contain'
  },
  logoImage: {
    width: '90%',
    maxHeight: 150,
    resizeMode: 'contain'
  },
  greyBkgrd: {
    backgroundColor: '#eee',
  },
  subHeader: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 50,
  }
});

export default styles;
