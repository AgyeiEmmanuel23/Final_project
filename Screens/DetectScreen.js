import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DeteectScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mask Screen</Text>
    </View>
  );
};

export default DeteectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
