/*
#Author: Firas.
#purpose: this component is responsible of the text input and adding new 
notes and todos.
# 12/28/2019
*/
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default TodoBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={props.inputValue}
        onChangeText={props.inputChange}
        onEndEditing={props.inputSubmit}
      />
      <TouchableOpacity style={styles.btnStyle} onPress={props.inputSubmit}>
        <Text style={styles.addTextStyle}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInputStyle: {
    height: 57,
    color: "#fff",
    fontSize: 19,
    marginLeft: 5,
    width: "79%"
  },
  btnStyle: {
    width: "21%",
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  addTextStyle: {
    fontWeight: "800",
    fontSize: 20
  }
});
