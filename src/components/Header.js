import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>todo app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#ff7675",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "#636e72"
  },
  textStyle: {
    fontSize: 30,
    color: "#636e72",
    textTransform: "uppercase",
    fontWeight: "900"
  }
});
