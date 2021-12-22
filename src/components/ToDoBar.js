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
    marginTop: 18,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInputStyle: {
    fontSize: 18,
    flex: 1
  },
  btnStyle: {
    width: "21%",
    height: "100%",
    backgroundColor: "#F487B6",
    alignItems: "center",
    justifyContent: "center"
  },
  addTextStyle: {
    fontWeight: "800",
    fontSize: 20
  }
});
