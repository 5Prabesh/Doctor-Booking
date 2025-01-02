import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.Container}>
      <View>
          <Icon />
        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  Container:{
    flexGrow:1, 
    backgroundColor:'white'
  }
});

export default HomeScreen;