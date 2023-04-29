import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Serial from "./Serial";

const AppInput = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.yellowBox}>
        <Text style={styles.yellowText}>CareSchedulee</Text>
      </View>
      <Text style={styles.text}>Please enter some valid information here</Text>
      
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />

      
      <TouchableOpacity style={styles.button} onPress={() => {
            props.navigation.navigate("Serial");
          }}>
        <Text style={styles.buttonText}> Submit</Text>
      </TouchableOpacity>
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
  yellowBox: {
    backgroundColor: 'grey',
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  yellowText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scheduleApCallText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default AppInput;
