import React from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";

export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: true,
    };
  }

  closeActivityIndicator = () => {
    setTimeout(() => {
      this.setState({
        animating: false,
      });
      this.props.navigation.navigate("MainScreen");
    }, 3000);
  };

  componentDidMount = () => this.closeActivityIndicator();

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.animating}
          color="#222222"
          size="large"
        />
        <Image
          source={require("./assets/blackLogo.jpg")}
          style={{ height: 80, resizeMode: "contain" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
