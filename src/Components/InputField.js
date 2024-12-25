import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';

const InputField = ({label, inputType, iconName, keyboardType}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const tooglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    // <View style={styles.inputContainer}>
    //   <Icon name={iconName} size={20} color={'grey'} style={styles.icon} />
    //   <TextInput
    //     style={styles.input}
    //     keyboardType={keyboardType}
    //     placeholder={label}
    //     inputType={inputType}
    //     placeholderTextColor={'grey'}
    //   />
    // </View>
    inputType === 'password' ? (
      <View style={styles.inputContainer}>
        <Icon name={iconName} size={20} color={'grey'} style={styles.icon} />
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          placeholder={label}
          inputType={inputType}
          placeholderTextColor={'grey'}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={tooglePasswordVisibility}>
          <FontAwesome5 name={isPasswordVisible?'eye-slash' : 'eye'} size={22} color={'grey'} style={styles.pwIcon} />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.inputContainer}>
        <Icon name={iconName} size={20} color={'grey'} style={styles.icon} />
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          placeholder={label}
          inputType={inputType}
          placeholderTextColor={'grey'}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f3f3f3',
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: 8,
    paddingLeft: wp(10),
    color: 'black',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    position: 'relative',
    zIndex: 1,
    left: wp(8),
    top: hp(2),
  },
  pwIcon: {
    position: 'relative',
    top: hp(2),
    right: wp(9),
  },
});

export default InputField;
