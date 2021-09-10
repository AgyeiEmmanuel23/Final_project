// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './Screens/HomeScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>

//    <HomeScreen/>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10

//   },
// });

// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

import HomeScreen from "./Screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MaskScreen from "./Screens/maskScreen";
import DeteectScreen from "./Screens/DetectScreen";
const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="mask" component={MaskScreen} />
            <Stack.Screen name="detect" component={DeteectScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          bottomButton
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 250,
    height: 250,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 38,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text: "Let us maintain our social distance to reduce the pandemic",
    title: "Social Distancing App",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png",
    },
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Freedom to fight the pandemic",
    text: "Upto 25% off on Domestic Flights",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png",
    },
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Great Offers",
    text: "Enjoy Great offers on our all services",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png",
    },
    backgroundColor: "#22bcb5",
  },
  {
    key: "s4",
    title: "Best Deals",
    text: " Best Deals on all our services",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png",
    },
    backgroundColor: "#3395ff",
  },
  {
    key: "s5",
    title: "Bus Booking",
    text: "Enjoy Travelling on Bus with flat 100% off",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png",
    },
    backgroundColor: "#f6437b",
  },
  {
    key: "s6",
    title: "Train Booking",
    text: " 10% off on first Train booking",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png",
    },
    backgroundColor: "#febe29",
  },
];
