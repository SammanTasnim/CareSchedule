import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Serial = ({ patientName, doctorName, serialNumber, appointmentTime }) => {
  return (
    <View style={styles.container}>
      <View style = {{backgroundColor : 'yellow', height : 100, width : 300, alignContent : 'center', justifyContent : 'center',}}>
      <Ionicons name="checkmark-done" size={24} color="black" />
      <Text>Congratulations</Text>
      </View>
      <Text style={styles.text}>Your appointment has been booked successfully!</Text>
      <Text style={styles.subText}>Patient Name: {patientName}</Text>
      <Text style={styles.subText}>Doctor Name: {doctorName}</Text>
      <Text style={styles.subText}>Serial Number: {serialNumber}</Text>
      <Text style={styles.subText}>Appointment Time: {appointmentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Serial;
