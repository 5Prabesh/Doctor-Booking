import {View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import AuthFooter from '../Components/AuthFooter';

const RegisterScreen = () => {
  return (
    <ScrollView style={styles.Container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} hidden={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          label={'Email'}
          inputType={'text'}
          keyboardType={'text'}
          iconName={'email'}
        />
        <InputField
          label={'Full name'}
          inputType={'text'}
          keyboardType={'text'}
          iconName={'user'}
        />
        <InputField
          label={'Password'}
          inputType={'password'}
          keyboardType={'password'}
          iconName={'lock'}
        />
        <InputField
          label={'Confirm password'}
          inputType={'password'}
          keyboardType={'password'}
          iconName={'lock'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={'Continue'}
          width={wp('90%')}
          backgroundColor={'#6C5DD3'}
        />
      </View>
      <View style={styles.authFooter}>
        <AuthFooter/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: hp('10%'),
  },
  headerText: {
    fontWeight: '800',
    fontSize: wp('8%'),
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: hp('6%'),
    gap: 20,
  },
  buttonContainer:{
    display:'flex', 
    alignItems:'center', 
    marginTop: hp('5%')
  }, 
  authFooter:{
    position:'relative', 
    top:hp('8%')
  }
});

export default RegisterScreen;
