import React, { Component } from "react";
import { View, Text, Button, ListView } from "react-native";
import Navbar from "../components/NavBar";
import AgentItem from '../components/agents/AgentItem';
import _ from 'lodash';

import { connect } from 'react-redux';
import {
  getAgents
} from '../actions';


class AgentListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: []
    };

     const agents = [
      {
        name: '...' 
      }
    ];
   
    this.createDataSource(agents);
  }

  componentDidMount() {
    this.props.getAgents("company-0001");
  }

  componentWillReceiveProps(nextProps) {
    this.agentData = [];
    _.map(nextProps.agents, (e) => {
      this.agentData.push(e);
    });
    this.createDataSource(this.agentData);
  }

  /*
  static getDerivedStateFromProps(nextProps, prevState) {
    this.agentData = [];
    _.map(nextProps.agents, (e) => {
      this.agentData.push(e);
    });
    console.log(this.agentData);
    this.createDataSource(this.agentData);
    return nextProps;
  }
  */

  createDataSource(agents) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(agents);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Navbar title={"Agents"} button={'Test as Client'} 
          action={() => this.props.navigation.navigate('Test')} />
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(agent) => <AgentItem {...agent} navigation={this.props.navigation} />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const agents = state.agent;
  return { agents };
};

export default connect(mapStateToProps, {
  getAgents
})(AgentListScreen);