import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Navbar from "../components/NavBar";

import { connect } from 'react-redux';
import {
  getAgents
} from '../actions';


class AgentListScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAgents("company-0001");
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Navbar title={"Login"} button={""} action={() => this._friendList()} />
      </View>
    );
  }
}


export default connect(null, {
  getAgents
})(AgentListScreen);