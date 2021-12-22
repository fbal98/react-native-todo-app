/*
#Author: Firas.
#purpose: this component is responsible of the footer components.
# 12/28/2019
*/
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>this is Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#ff7675",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 30,
    color: "#636e72",
    textTransform: "uppercase",
    fontWeight: "900"
  }
});
