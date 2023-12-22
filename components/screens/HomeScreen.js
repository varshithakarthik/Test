import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
const HomeScreen = ({ navigation }) => {
 return (
 <View style={styles.container}>
 <Button
 title='Create Reminder'
 onPress={() => navigation.navigate('ReminderScreen')}
 />
 </View>
 );
};
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 },
});
export default HomeScreen;
