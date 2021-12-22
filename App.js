/*
#Author: Firas.
#purpose: app.js 
# 12/28/2019
*/
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent />
        <View style={{ height: 44, backgroundColor: "#ff7675" }}></View>
        <SafeAreaView style={{ flex: 1 }}>
          <Body />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
