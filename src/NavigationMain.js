import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import Dashboard from "./Screens/Dashboard";
import Profile from "./Screens/Profile";

const Tab = createBottomTabNavigator();
const Dash = "Dash";
export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name={Dash} component={Dashboard}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
