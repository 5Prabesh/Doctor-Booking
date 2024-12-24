import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const AuthFooter = () => {
  return (
    <View>
      <View>
        <Text style={styles.text}>Connect with your social account</Text>
      </View>
      <View style={styles.socialLinks}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/facebook_icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/google_icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/apple_icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   textContainer: {
//     marginTop: 10,
//   },
  text: {
    textAlign: 'center',
    color:'grey'
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
});

export default AuthFooter;
