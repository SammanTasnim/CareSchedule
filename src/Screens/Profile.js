import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import NavigationMain from "../NavigationMain"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ alignItems : 'center'}}>
            <Text style={styles.profileup}>Profile</Text>
        </View>

        {/* Profile image */}
        <View style={{alignContent : 'center', alignItems :  'center', margin : 50}}>
            <Image source = {require('../Img/Doctor.jpg')} style={{height : 150, width : 150, borderRadius : 100, borderWidth : 2, borderColor : 'black'}} />
        </View>

        {/* Profile about */}
        <View style={styles.profileAboutView}>
            <Text style={styles.profileAboutName}>Name : Asaduzzaaman</Text>
            <Text style={styles.profileAboutRest}>sdhar@bscse.uiu.ac.bd</Text>
            <Text style={styles.profileAboutRest}>Age : 25</Text>
            <Text style={styles.profileAboutRest}>Sex : Male</Text>
        </View>
        

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
    profileup : {height : 50, width : "100%", textAlign : 'center', backgroundColor : 'black', color : 'white',marginTop : 50, borderRadius : 0, paddingTop : 10, fontSize : 30},
    profileAboutView : {height : "30%", width : "95%", backgroundColor : '#365e66', textAlign : 'center', padding : 50, margin : 10, borderBottomEndRadius : 50, borderTopStartRadius : 50},
    profileAboutName : {fontSize : 30, fontWeight : '900', padding : 3, color : 'white'},
    profileAboutRest : {fontSize : 30, fontWeight : '300', padding : 2, color : '#eae2b7'},

})
