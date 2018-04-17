import React, { Component } from "react";
import { View, Text, Button, ListView } from "react-native";
import Navbar from "../components/NavBar";

import { connect } from 'react-redux';
import {
  // getAgentClients
} from '../actions';


class ClientTestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  createDataSource(agents) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(agents);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Navbar title={'Clients'} button={'Back'} 
          action={() => this.props.navigation.navigate('Agents')} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
};

export default connect(null, {
  // getAgentClients
})(ClientTestScreen);