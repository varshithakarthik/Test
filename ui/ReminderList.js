import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Reminder from './Reminder';
const ReminderList = ({ reminderList }) => {
 const [reminders, setReminders] = useState(reminderList);
return (
 <ScrollView contentContainerStyle={styles.container}>
 {reminders.map((reminder) => {
 return <Reminder key={reminder.id} reminder={reminder.reminder} />;
 })}
 </ScrollView>
 );
};
const styles = StyleSheet.create({
 container: {
 paddingVertical: 10,
 paddingHorizontal: 20,
 },
});
export default ReminderList;