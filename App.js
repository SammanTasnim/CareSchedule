import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
import Login from "./src/Screens/Login";


const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <stack.Navigator screenOptions={{headerShown : false}}>
        <stack.Screen name="Login" component={Login} />
      </stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <stack.Navigator>
    //     <stack.Screen name="Home" component={HomeScreen} />
    //     <stack.Screen name="List" component={ListScreen} />
    //     <stack.Screen name="Counter" component={CounterScreen} />
    //   </stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
