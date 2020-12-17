import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NewPlaceScreen = (props) => {
  return (
    <View>
      <Text>New NewPlaceScreen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add Place",
  };
};

export default NewPlaceScreen;

const styles = StyleSheet.create({});
