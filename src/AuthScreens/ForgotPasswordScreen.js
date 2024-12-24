import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import InputField from '../Components/InputField';
import Button from '../Components/Button';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} hidden={false} />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={0.7}>
          <Icon name="arrowleft" size={wp(8)} color={'#6C5DD3'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Reset Password</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.descText}>
          Please enter your email account to reset your password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          label={'Email'}
          inputType={'text'}
          keyboardType={'text'}
          iconName={'email'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={'Submit'}
          width={wp('90%')}
          backgroundColor={'#6C5DD3'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5.5),
    paddingVertical: hp(2),
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: wp(-8), // To center text despite back button space
  },
  textContainer: {
    paddingLeft: wp(6),
    marginTop: hp(3),
  },
  descText: {
    fontSize: wp('4%'),
    color: 'grey',
    fontWeight: '400',
  },
  inputContainer: {
    marginTop: hp(7),
  },
  buttonContainer:{
    marginTop:hp(5),
    alignItems:'center'
  }
});

export default ForgotPasswordScreen;
