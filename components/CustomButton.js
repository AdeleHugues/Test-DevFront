import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: this.props.background }]}
      >
        <Image source={this.props.imageURI} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    height: 45,
    width: 45,
    borderRadius: 15,
    shadowColor: "#0000001A",
    justifyContent: "center",
    alignItems: "center",
  },
});
