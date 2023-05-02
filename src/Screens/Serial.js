import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Serial = ({ patientName, doctorName, serialNumber, appointmentTime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CareSchedulee</Text>
      </View>
      <View style={styles.content}>
        <Ionicons name="checkmark-done" size={50} color="#30a7d7" />
        
        <Text style={styles.confirmationText}>Your appointment has been successfully booked!</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.labelText}>Patient Name:</Text>
            <Text style={styles.valueText}>{patientName}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.labelText}>Doctor Name:</Text>
            <Text style={styles.valueText}>{doctorName}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.labelText}>Serial Number:</Text>
            <Text style={styles.valueText}>{serialNumber}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.labelText}>Appointment Time:</Text>
            <Text style={styles.valueText}>{appointmentTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'grey',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#30a7d7',
    marginTop: 20,
    marginBottom: 10,
  },
  confirmationText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  valueText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Serial;
