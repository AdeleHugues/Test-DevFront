import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import MainPage from "./MainPage";
import LoadingPage from "./LoadingPage";
import { createAppContainer } from "react-navigation";

const MainStack = createStackNavigator(
  {
    Chargement: LoadingPage,
    MainScreen: MainPage,
  },
  {
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(MainStack);

export default function App() {
  return <AppContainer />;
}
