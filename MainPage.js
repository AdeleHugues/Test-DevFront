import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import CustomButton from "./components/CustomButton";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <CustomButton
              background="#4A4A4A"
              imageURI={require("./assets/backButton.png")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("./assets/logo.png")} />
          </View>
          <View style={{ flex: 1 }} />
        </View>

        <Text
          style={[
            styles.title,
            { color: "#FFFFFF", marginLeft: 20, marginTop: 20 },
          ]}
        >
          Services
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <ScrollView horizontal style={{ marginTop: -110 }}>
          <Card imageURI={require("./assets/FirstImage.png")} />
          <Card imageURI={require("./assets/SecondImage.png")} />
        </ScrollView>
      </View>

      <View style={styles.details}>
        <Text style={[styles.title, { color: "#000000" }]}>Articles</Text>
        <Text style={styles.label}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet malesuada ex, consectetur convallis erat. Sed viverra id metus in
          eleifend.
        </Text>
        <View style={styles.footer}>
          <View style={styles.forwardButton}>
            <Text style={styles.label}>Commencer à lire</Text>
            <CustomButton
              background="#fff"
              imageURI={require("./assets/NextButton.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-end",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
  },
  cardContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "transparent",
    marginHorizontal: 5,
  },
  details: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "transparent",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginVertical: 5,
  },
  footer: {
    backgroundColor: "#F4F4F4",
    alignSelf: "stretch",
    marginVertical: 10,
    height: 80,
    borderRadius: 22,
    justifyContent: "center",
  },
  forwardButton: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#222222",
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 250,
  },
});
