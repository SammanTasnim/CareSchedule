import React from "react";
import { Button, Text, View, Image, StyleSheet, Icon } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import { Ionicons } from '@expo/vector-icons';
import Serial from "./Serial";
const Appointment = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {/* Doctor image & name area */}
      <View style={{flex:1, alignItems : 'center'}}>
        <Image source={require('../Img/Doctor.jpg')} style={styles.img}/>
        <Text style={styles.textName}>Dr. Mehrin Afroz</Text>
      </View>

      {/* About area */}
      <View style={{flex : 1, padding : 25}}>
        <Text style={styles.aboutText}>About</Text>
        <Text style={{ textAlign : 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>

      {/* Schedule area */}
      <View style={{flex : 0.7, flexDirection : 'row'}}>

        {/* Time area */}
        <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTimeText}>Monday 11:30 to 1:30</Text>
        </View>

        {/* Appointment & Call Area */}
        <View>
            {/* Appointment */}
            <View style={styles.scheduleApCallView}>
                <TouchableOpacity  onPress={()=> {
                    props.navigation.navigate("Serial");
                }}>
                     <Text style={styles.scheduleApCallText}><Ionicons style={{color : 'grey'}} name="play" size={24} color="black" /> Appointment</Text>
                     
                </TouchableOpacity>
            </View>
            {/* Call */}
            <View style={styles.scheduleApCallView}>
                <TouchableOpacity>
                    <Text style={styles.scheduleApCallText}><Ionicons style={{color : 'grey'}} name="call" size={24} color="black" />  Make a Call</Text>
                </TouchableOpacity> 
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
    img : {width : 300, height : 250, borderRadius : 10, marginTop : 20},
    textName : {fontSize : 30, margin : 5},
    aboutText : {fontSize : 30, fontWeight : '700', textDecorationLine : 'underline'},
    scheduleTime : {height : 100, width : 200, backgroundColor : 'grey', borderRadius : 20, marginLeft : 20},
    scheduleTimeText : {color : 'white', fontSize : 20, textAlign : 'center', alignContent : 'center', alignItems : 'center', marginTop : 37},
    scheduleApCallView : {backgroundColor : 'blue', height : 50, width : 170, marginLeft : 20, borderRadius : 15, marginBottom : 5},
    scheduleApCallText : {textAlign : 'center', fontSize : 20,color : 'white', margin : 10},
})
