import React from "react";
import { Button, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import Appointment from "./Appointment";

const Dashboard = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor : '#F8F8F8' }}>

            {/* Dash */}
            <View style={{ backgroundColor: '#F8F8F8' }}>
                <Text style={styles.dash}>Dashboard</Text>
            </View>
            

            {/* Category */}
            <Text style={{ backgroundColor: '#F8F8F8', fontSize: 30, paddingBottom: 5, fontWeight : '300', marginLeft : 15 }}>Select Category</Text>
            <View style={{ height: 100, width: "100%", backgroundColor: '#F8F8F8' }}>
                <ScrollView horizontal={true} style={{ margin: 5 }}>
                    <TouchableOpacity>
                        <Text style={styles.catText}>Paediatrician</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.catText}>Gynaecologist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.catText}>Dentist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.catText}>Cardiologist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.catText}>Surgeon</Text>
                    </TouchableOpacity>                    
                </ScrollView>
            </View>
            
            {/* Profile Button */}
            <TouchableOpacity style={styles.profileButton} onPress={() => {
                props.navigation.navigate("Profile");
            }}>
                <Text style={{textDecorationLine : 'underline', color : '#3D70B2', fontSize : 20}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton} onPress={() => {
                props.navigation.navigate("Tips");
            }}>
                <Text style={{textDecorationLine : 'underline', color : '#3D70B2', fontSize : 20}}>Tips</Text>
            </TouchableOpacity>

            <Text style={{ backgroundColor: '#F8F8F8', fontSize: 30, paddingBottom: 5, fontWeight : '300', marginLeft : 15 }}>Top Rated Doctors</Text>

            <View style={{flex : 1}}>
                <ScrollView>
                    <View style={styles.doctorView}>
                        <Image source = {require('../Img/Doctor.jpg')} style={styles.doctorImage}/>
                        <View style={styles.doctorDetails}>
                            <Text style={styles.doctorName}>Dr. Arifuzzaman</Text>
                            <Text style={styles.doctorSpecialty}>Obstetrics and Gynecology</Text>
                            <TouchableOpacity onPress={ () => {props.navigation.navigate("Appointment");}}>    
                                <Text style={styles.detailsButton}>Details</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.doctorView}>
                        <Image source = {require('../Img/Doctor.jpg')} style={styles.doctorImage}/>
                        <View style={styles.doctorDetails}>
                            <Text style={styles.doctorName}>Dr. Arifuzzaman</Text>
                            <Text style={styles.doctorSpecialty}>Obstetrics and Gynecology</Text>
                            <TouchableOpacity onPress={ () => {props.navigation.navigate("Appointment");}}>    
                                <Text style={styles.detailsButton}>Details</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.doctorView}>
                        <Image source = {require('../Img/Doctor.jpg')} style={styles.doctorImage}/>
                        <View style={styles.doctorDetails}>
                            <Text style={styles.doctorName}>Dr. Arifuzzaman</Text>
                            <Text style={styles.doctorSpecialty}>Obstetrics and Gynecology</Text>
                            <TouchableOpacity onPress={ () => {props.navigation.navigate("Appointment");}}>    
                                <Text style={styles.detailsButton}>Details</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    dash: {
        backgroundColor: '#F8F8F8', marginTop: 50, fontSize: 50, fontWeight: '900', color: '#3D70B2', paddingLeft: 10
    },
    catText : {fontSize : 30, margin : 8, borderRadius : 5, height :70, width : 180, textAlign : 'center', backgroundColor : '#FFFFFF', paddingTop : 20, color : '#3D70B2', borderColor : '#3D70B2', borderWidth : 2, opacity : 0.9},
    profileButton: {margin : 20, alignItems: 'center'},
    doctorView : {height : 200, width : '100%', backgroundColor : '#FFFFFF', alignContent : 'center', alignItems : 'center', padding : 20, borderWidth: 1, borderColor : '#E4E4E4', borderRadius: 10, flexDirection: 'row'},
    doctorImage: {width : 100, height : 100, borderRadius : 50},
    doctorDetails: {flex: 1, marginLeft: 20},
    detailsButton: {
        backgroundColor: "#59c3b3",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 16,
        alignSelf: 'flex-end'
    },
    detailsButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    }
})