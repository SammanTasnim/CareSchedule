import React from "react";
import { Button, ScrollView, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";

const Dashboard = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{flex : 1}}>
            <Text style={styles.logo}>CareSchedule</Text>
        </View>
        {/* Dashboard under logo area */}
        <View style={styles.underLogoDash}>
            {/* Category area */}
            <View style={{}}>
                <TouchableOpacity style={{flex : 1, backgroundColor : 'green',width : 30, height : 50}}>
                    <Text>Cat 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex : 1}}>
                    <Text>Cat 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex : 1, backgroundColor : 'green'}}>
                    <Text>Cat 1</Text>
                </TouchableOpacity>
            </View>
            {/* All doctor area */}
            <View style={{flex : 5}}>
                <Text>Hello</Text>
            </View>
        </View>
      
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
    logo : {
        color : 'red',
        margin : 20,
        fontSize : 30,
        paddingTop : 25,
    },
    underLogoDash : {
        flex:7, 
        flexDirection:"row",
        paddingLeft : 70,
        backgroundColor : '#ffbf00',
        height : '70%',
    }
})