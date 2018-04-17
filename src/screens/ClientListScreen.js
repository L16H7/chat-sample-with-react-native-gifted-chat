import React, { Component } from "react";
import { View, Text, Button, ListView } from "react-native";
import Navbar from "../components/NavBar";
import ClientItem from '../components/clients/ClientItem';
import _ from 'lodash';

import { connect } from 'react-redux';
import {
  // getAgentClients
} from '../actions';


class ClientListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };

    const agent = this.props.navigation.state.params.agent;
    this.clientData = [];
    _.map(this.props.navigation.state.params.clients, (e) => {
      e.agent = agent;
      this.clientData.push(e);
    });
    this.createDataSource(this.clientData);
  }

  componentDidMount() {
  }

  createDataSource(agents) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(agents);
  }

  _agentList() {
    console.log('back???');
    this.props.navigation.navigate('Agents');
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Navbar title={'Clients'} button={'Back'} action={() => this._agentList()} />
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(client) => <ClientItem {...client} navigation={this.props.navigation} />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
};

export default connect(null, {
  // getAgentClients
})(ClientListScreen);