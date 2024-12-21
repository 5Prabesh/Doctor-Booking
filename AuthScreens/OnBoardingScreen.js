import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const OnBoardingScreen = () => {
  return (
    <LinearGradient
      colors={['#6942BB', '#832391']}
      style={styles.Container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Doctor</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome to Doctor App</Text>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
  logoContainer:{
    marginBottom: 100
  }, 
  logoText:{
    fontSize:45,
    color:'#FFFFFF',
    fontWeight:'900'
  },
  welcomeText:{
    color:'#FFFFFF',
    fontSize:40,
    textAlign:'center',
    fontWeight:'700',
    margin: 10, 
    marginBottom:20
  },
  button:{
    height: 50,
    width:300,
    backgroundColor:'white', 
    borderRadius:10, 
    justifyContent:'center',
    alignItems:'center'
  }
});

export default OnBoardingScreen;
