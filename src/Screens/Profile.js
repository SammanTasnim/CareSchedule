import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import NavigationMain from "../NavigationMain";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headingContainer}>
            <Text style={styles.heading}>My Profile</Text>
        </View>

        {/* Profile image */}
        <View style={styles.imageContainer}>
            <Image source = {require('../Img/user.jpeg')} style={styles.profileImage} />
        </View>

        {/* Profile about */}
        <View style={styles.aboutContainer}>
            <Text style={styles.name}>Name : Asaduzzaaman</Text>
            <Text style={styles.info}>Email : sdhar@bscse.uiu.ac.bd</Text>
            <Text style={styles.info}>Age : 25</Text>
            <Text style={styles.info}>Gender : Male</Text>
        </View>
        

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
    headingContainer: {
        alignItems : 'center',
        marginTop: 50,
        backgroundColor: 'black',
        paddingVertical: 10,
    },
    heading: {
        color : 'white',
        fontSize : 25,
    },
    imageContainer: {
        alignContent : 'center', 
        alignItems :  'center', 
        marginVertical : 50,
    },
    profileImage: {
        height : 150, 
        width : 150, 
        borderRadius : 100, 
        borderWidth : 2, 
        borderColor : 'black',
    },
    aboutContainer: {
        height : "30%", 
        width : "95%", 
        backgroundColor : '#365e66', 
        textAlign : 'center', 
        paddingVertical : 50, 
        paddingHorizontal : 30, 
        marginHorizontal : 10, 
        borderRadius : 30,
    },
    name: {
        fontSize : 20, 
        fontWeight : 'bold', 
        paddingVertical : 5, 
        color : 'white',
    },
    info: {
        fontSize : 18, 
        fontWeight : 'normal', 
        paddingVertical : 5, 
        color : '#eae2b7',
    },
});
