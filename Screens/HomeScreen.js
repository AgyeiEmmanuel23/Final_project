import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#55A6DD",
            marginLeft: 40,
            fontWeight: "bold",
            paddingTop: 40,
            textAlign: "center",
          }}
        >
          Welcome to the HomeScreen
        </Text>
        <View style={{ alignItems: "center", marginVertical: 40 }}>
          <TouchableOpacity
            style={styles.nosemask}
            onPress={() => {
              navigation.navigate("mask");
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              Detect Nose Mask
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.distance}
            onPress={() => {
              navigation.navigate("detect");
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              Detect Social Distance
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "yellow",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  nosemask: {
    height: 60,
    width: "80%",
    backgroundColor: "#007ACC",
    borderRadius: 20,
    backfaceVisibility: "visible",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  distance: {
    height: 60,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#007ACC",
    backfaceVisibility: "visible",
    alignItems: "center",
    justifyContent: "center",
  },
});
