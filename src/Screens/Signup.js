import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";

const Signup = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontSize: 60, textAlign: 'center', color: '#444444' }}>Signup</Text>
      </View>

      <View style={{ alignContent: 'center', alignItems: 'center', flex: 3 }}>
        <TextInput placeholder="Email" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: '#c9c9c9', margin: 20, fontSize: 20, padding : 10 }} placeholderTextColor="#c9c9c9" />
        <TextInput placeholder="Password" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: '#c9c9c9', margin: 20, fontSize: 20, padding : 10 }} placeholderTextColor="#c9c9c9" />
        <TextInput placeholder="Age" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: '#c9c9c9', margin: 20, fontSize: 20, padding : 10 }} placeholderTextColor="#c9c9c9" />
        <TextInput placeholder="Gender" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: '#c9c9c9', margin: 20, fontSize: 20, padding : 10 }} placeholderTextColor="#c9c9c9" />

        <TouchableOpacity style={{ height: 50, backgroundColor : '#FF9A00', width : "80%", alignItems : 'center', justifyContent : 'center', borderRadius : 10, marginVertical : 20 }} onPress={()=> {
            props.navigation.navigate("Login");
        }}>
          <Text style={{ color : 'white', fontSize : 20 }}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin : 20,}} onPress={() => {
            props.navigation.navigate("Login");
          }}>
          <Text style={{textDecorationLine : 'underline', color : '#444444', fontSize : 20}}>Already have an account? Login here</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Signup;
