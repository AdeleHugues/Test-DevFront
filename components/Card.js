import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={this.props.imageURI} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 300,
    borderRadius: 30,
    shadowColor: "red",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 15,
  },
});
