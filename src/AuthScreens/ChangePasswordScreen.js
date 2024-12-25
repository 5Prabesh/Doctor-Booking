import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../Components/InputField';
import Button from '../Components/Button';

const ChangePasswordScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.Container}>
      <StatusBar
        backgroundColor={'#FFFFFF'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={{padding:5}}
          >
          <Icon name="arrowleft" size={wp(8)} color={'#6C5DD3'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.descText}>
          Please enter your new password to change password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          label={'New password'}
          inputType={'password'}
          keyboardType={'text'}
          iconName={'lock'}
        />
        <InputField
          label={'Confirm new password'}
          inputType={'password'}
          keyboardType={'text'}
          iconName={'lock'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={'Submit'}
          width={wp('90%')}
          backgroundColor={'#6C5DD3'}
          onPress={()=>navigation.navigate('ChangePasswordScreen')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
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
    gap: 20
  },
  buttonContainer:{
    marginTop:hp(5),
    alignItems:'center'
  }
});

export default ChangePasswordScreen;
