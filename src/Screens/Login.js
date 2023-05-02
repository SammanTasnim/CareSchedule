import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

const Login = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CareSchedule </Text>
      </View>

      <View style={styles.content}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#444"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#444"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Dash");
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate("Sign");
          }}>
          <Text style={styles.signupText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5c5c5c",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#eee",
    height: 50,
    width: "80%",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#e91e63",
    borderRadius: 5,
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupText: {
    textDecorationLine: "underline",
    color: "#333",
    fontSize: 18,
    marginTop: 20,
  },
});

export default Login;
