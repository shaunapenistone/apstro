import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import React from 'react';

import MyChartScreen from '../screens/MainScreens/MyChartScreen';
import PlanetsOverViewScreen from '../screens/MainScreens/PlanetsOverviewScreen'
import SignUpScreen from '../screens/LoginScreens/SignUpScreen';
import BirthTimeScreen from '../screens/LoginScreens/BirthTimeScreen';
import Colors from '../constants/Colors';
import LoadingScreen from '../screens/MainScreens/LoadingScreen';
import PlanetsDetailsScreen from '../screens/MainScreens/PlanetDetailsScreen';
import FriendsScreen from '../screens/MainScreens/FriendsScreen';
import ProfileScreen from '../screens/MainScreens/ProfileScreen';
import SynastryReportScreen from '../screens/MainScreens/SynastryReportScreen';
import MyProfileScreen from '../screens/MainScreens/MyProfileScreen';
import AscendantScreen from '../screens/MainScreens/AscendantScreen';
import SunSignCompatabilityScreen from '../screens/MainScreens/SunSignCompatibilityScreen';
import TermsAndConditionsScreen from '../screens/LoginScreens/TermsAndConditionsScreen';
import PrivacyPolicyScreens from '../screens/LoginScreens/PrivacyPolicyScreen';

const ChartNavigator = createStackNavigator({
  MyPlanets: PlanetsOverViewScreen,
  PlanetsDetail: PlanetsDetailsScreen,
  Ascendant: AscendantScreen
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }})

const FriendsNavigator = createStackNavigator({
  MyFriends: FriendsScreen,
  Profile: ProfileScreen,
  SynastryReport: SynastryReportScreen,
  SunSignCompatibility: SunSignCompatabilityScreen
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }})


const ApstroNavigator = createBottomTabNavigator({
  Friends: {
    screen: FriendsNavigator,
    navigationOptions: {
      title: 'Compatibility',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='people-outline' size={22} color='gray'/>
      }
    }
  },
  MyChart: {
    screen: MyChartScreen,
    navigationOptions: {
      title: 'Chart Overview',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-home-outline' size={22} color='gray'/>
      }
    }
  },
  MyPlanets: {
    screen: ChartNavigator,
    navigationOptions: {
      title: 'My Planets',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-planet-outline' size={22} color='gray'/>
      }
    }},
    MyProfile: {
      screen: MyProfileScreen,
      navigationOptions: {
        title: 'My Profile',
        tabBarIcon: (tabInfo) => { 
          return <Ionicons name="person-outline" size={22} color='gray'/>
        }
      }
    }
}, {
  tabBarOptions: {
    activeTintColor: Colors.blue,
    inactiveTintColor: 'gray',
    backgroundColor: Colors.pink
  }
})

const AuthNavigator = createStackNavigator({
  Auth: SignUpScreen,
  BirthTime: BirthTimeScreen,
  TermsAndConditions: TermsAndConditionsScreen,
  PrivacyPolicy: PrivacyPolicyScreens
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }} )

const MainNavigator = createSwitchNavigator({
  StartUp: LoadingScreen,
  Auth: AuthNavigator,
  Chart: ApstroNavigator
})

export default createAppContainer(MainNavigator);
