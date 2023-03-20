// import React, { useEffect, useState } from "react";
// import { Button, Text, View, StyleSheet } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log("For Branch Test");
//   }, []);
//   return (

//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyle}>{counter}</Text>
//       <View style={styles.buttonViewStyle}>
//         <Button
//           title="INCREASE"
//           onPress={() => {
//             setCounter(counter + 1);
//           }}
//         />
//         <Button
//           title="DECREASE"
//           onPress={() => {
//             setCounter(counter - 1);
//           }}
//         />
//       </View>
//       {/* <View style={{flexDirection : 'row'}}>
//         <TextInput placeholder="Enter you name"/>
//         <Button title="Submit"/>
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 80,
//   },
//   viewStyle: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonViewStyle: {
//     display: "flex",
//     flexDirection: "row",
//   },
// });

// export default CounterScreen;
