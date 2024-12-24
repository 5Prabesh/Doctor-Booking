import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

const InputField = ({label, inputType, iconName, keyboardType}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={20} color={'grey'} style={styles.icon} />
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={label}
        inputType={inputType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f3f3f3',
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: 8,
    paddingLeft: 40,
    color: 'black',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    position: 'relative',
    zIndex: 1,
    left: 30,
    top: 12,
  },
});

export default InputField;
