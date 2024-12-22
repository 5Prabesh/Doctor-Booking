import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OnBoardingScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#6942BB', '#832391']} style={styles.Container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Doctor</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome to Doctor App</Text>
      <View style={styles.buttonContainer}>
        <Button
          label={'Sign Up'}
          width={wp('90%')}
          backgroundColor={'#6C5DD3'}
          onPress={() => navigation.navigate('RegisterScreen')}
        />
        <Button
          label={'Sign In'}
          width={wp('90%')}
          backgroundColor={'#292a55'}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: hp(24),
  },
  logoText: {
    fontSize: wp(12),
    color: '#FFFFFF',
    fontWeight: '900',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: wp(10),
    textAlign: 'center',
    fontWeight: '700',
    marginTop: hp(10),
  },
  buttonContainer: {
    marginTop: hp(10),
    gap: hp(2),
  },
});

export default OnBoardingScreen;
