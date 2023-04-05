import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import Login from "./Login";

const Signup = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontSize: 60, textAlign: 'center', color: 'white' }}>Signup</Text>
      </View>

      <View style={{ alignContent: 'center', alignItems: 'center', flex: 3 }}>
        <TextInput placeholder="Email" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: 'black', margin: 20, fontSize: 20 }} placeholderTextColor="black" />
        <TextInput placeholder="Password" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: 'black', margin: 20, fontSize: 20 }} placeholderTextColor="black" />
        <TextInput placeholder="Age" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: 'black', margin: 20, fontSize: 20 }} placeholderTextColor="black" />
        <TextInput placeholder="Gender" style={{ backgroundColor: 'white', height: 50, width: "80%", borderRadius: 10, borderColor: 'black', margin: 20, fontSize: 20 }} placeholderTextColor="black" />

        <TouchableOpacity style={{height: 40, backgroundColor : 'red', width : 100, alignItems : 'center', alignContent : 'center', borderRadius : 5}} onPress={()=> {
            props.navigation.navigate("Login");
        }}>
          <Text style={{alignItems : 'center', color : 'white', fontSize : 30}}>Create account</Text>
        </TouchableOpacity>

    
      </View>


      <View>
        <Text style={{ fontSize: 40 }}>Hello World</Text>
        <Button
          title="Go To Another Page"
          onPress={() => {
            props.navigation.navigate("List");
          }}
        />
        <Button
          title="Go To Counter Page"
          onPress={() => {
            props.navigation.navigate("Counter");
          }}
        />
      </View> 

      { <View>
        <Text style={{ fontSize: 40 }}>Hello World</Text>
        <Button
          title="Go To Another Page"
          onPress={() => {
            props.navigation.navigate("List");
          }}
        />
        <Button
          title="Go To Counter Page"
          onPress={() => {
            props.navigation.navigate("Counter");
          }}
        />
      </View> 
      }
    </SafeAreaView>
  );
};

export default Signup;
