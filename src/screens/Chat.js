import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { SwitchNavigation } from "react-navigation";


class Chat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  _friendList = () => {
    this.props.navigation.navigate("List");
  }

  render() {
    return (
      <View>
        <Text>Chatty</Text>
        <Button title="GO" onPress={this._friendList} />
      </View>
    );
  }
}

export default Chat;