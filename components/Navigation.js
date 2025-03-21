import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import StudySpotScreen from '../screens/StudySpotScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Home and StudySpot
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StudySpot" component={StudySpotScreen} />
    </Stack.Navigator>
  );
}

// Bottom Tabs
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main App Navigation
export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
