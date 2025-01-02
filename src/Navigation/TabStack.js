import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabScreens/HomeScreen';
import BookingScreen from '../TabScreens/BookingScreen';
import ChatScreen from '../TabScreens/ChatScreen';
import ProfileScreen from '../TabScreens/ProfileScreen';
import Icon from 'react-native-vector-icons/Feather';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';



const TabStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'white',
        height: hp(10),
        borderColor: 'white',
        paddingTop: hp(2),
      },
        
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', width:wp(15)}}>
              <Icon name={'home'} size={wp(6)} style={{color: focused ? '#6C5DD3' : 'grey',}}/>
              <Text style={{color:focused ? '#6C5DD3' : 'grey'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', width:wp(15)}}>
              <Icon name={'calendar'} size={wp(6)} style={{color: focused ? '#6C5DD3' : 'grey',}}/>
              <Text style={{color:focused ? '#6C5DD3' : 'grey'}}>Booking</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', width:wp(15)}}>
              <Icon name={'message-circle'} size={wp(6)} style={{color: focused ? '#6C5DD3' : 'grey',}}/>
              <Text style={{color:focused ? '#6C5DD3' : 'grey'}}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', width:wp(15)}}>
              <Icon name={'user'} size={wp(6)} style={{color: focused ? '#6C5DD3' : 'grey',}}/>
              <Text style={{color:focused ? '#6C5DD3' : 'grey'}}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
