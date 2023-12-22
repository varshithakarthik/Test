import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import ReminderList from '../../ui/ReminderList';
const ReminderScreen = () => {
 const [reminders, setReminders] = useState([]);
const saveReminder = (reminder) => {
 const newReminder = {
 id: `${Date.now()}`,
 reminder,
 };
 setReminders([reminders, newReminder]);
 };
return (
 <View style={styles.container}>
 <TextInput
 style={styles.textInput}
 placeholder='Enter Reminder'
 onChangeText={(text) => setReminderText(text)}
 />
 <Button title='Set Reminder' onPress={() => saveReminder(reminderText)} />
 <ReminderList reminderList={reminders} />
 </View>
 );
};
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 },
 textInput: {
 width: '80%',
 height: 40,
 borderWidth: 1,
 borderColor: '#CCCCCC',
 borderRadius: 5,
 marginBottom: 20,
 paddingLeft: 10,
 },
});
export default ReminderScreen;