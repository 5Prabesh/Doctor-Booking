import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({label, width, backgroundColor, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {width}, {backgroundColor}]}
        activeOpacity={0.8}
        >
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: hp('10%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp(4),
    color: 'white',
  },
});

export default Button;
