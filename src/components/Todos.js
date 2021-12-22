/*
#Author: Firas.
#purpose: this component represents the single todo item box with
 delete btn and done icon.
# 12/28/2019
*/
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
export default Todos = props => {
  const whenDone = props.isDone ? (
    <FontAwesome name={"check-square"} style={styles.doneIcon} />
  ) : null;
  return (
    <TouchableOpacity onPress={props.done}>
      <View style={styles.container}>
        <Text
          style={[styles.textStyle, { color: props.isDone ? "#bbb" : '#F487B6' }]}
        >
          {props.todo}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {whenDone}
          <TouchableOpacity onPress={props.deleteTodo}>
            <AntDesign name="delete" style={styles.deleteStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    elevation: 3,
    borderWidth: 0,
    margin: 5,
  },
  textStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: '#F487B6',
    fontSize: 18,
  },
  deleteStyle: {
    fontSize: 20,
    margin: 10,
    color: "#ff3030"
  },
  doneIcon: {
    fontSize: 20,
    margin: 10,
    marginRight: 1,
    color: "#2ecc71"
  }
});
