import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const Tips = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CareSchedule</Text>
      <Text style={styles.subtitle}>Daily Health Tips</Text>
      <View style={styles.tipsContainer}>
        <Text style={styles.tip}>1. Base your meals on higher fibre starchy carbohydrates</Text>
        <Text style={styles.tip}>2. Eat plenty of fruit and vegetables</Text>
        <Text style={styles.tip}>3. Cut down on saturated fat and sugar</Text>
        <Text style={styles.tip}>4. Eat less salt: no more than 6g a day for adults</Text>
        <Text style={styles.tip}>5. Get active and be a healthy weight</Text>
        <Text style={styles.tip}>6. Drink plenty of water</Text>
      </View>
      {/* <View>
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
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tipsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    flex: 1,
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Tips;
