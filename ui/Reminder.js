import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Reminder = ({ reminder }) => {
 return (
 <View style={styles.container}>
 <Text style={styles.text}>{reminder}</Text>
 </View>
 );
};
const styles = StyleSheet.create({
 container: {
 marginVertical: 10,
 backgroundColor: '#FFFFFF',
 borderRadius: 5,
 padding: 10,
 },
 text: {
 fontSize: 20,
 },
});
export default Reminder;