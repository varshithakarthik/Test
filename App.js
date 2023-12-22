import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import ReminderScreen from './components/screens/ReminderScreen';
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  ReminderScreen: { screen: ReminderScreen },
});
const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  header: {
    backgroundColor: '#2196F3',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
export default App;
