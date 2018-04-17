import React, { Component } from "react";
import { View, Text, Button, ListView } from "react-native";
import Navbar from "../components/NavBar";
import AgentList from '../components/agents/AgentList';

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
        name: "name1"
      },
      {
        name: 'name2'
      },
      {
        name: 'name3'
      }
    ];
   
    this.createDataSource(agents);
  }

  componentDidMount() {
    this.props.getAgents("company-0001");
  }

  getDerivedStateFromProps(nextProps, prevState) {
    console.log('WRP');
    console.log(nextProps);
    // this.createDataSource(nextProps.agents);
    return nextProps;
  }

  createDataSource(agents) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(agents);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Navbar title={"Login"} button={""} action={() => this._friendList()} />
        <ListView
          enableEmptySections
          // contentContainerStyle={styles.grid}
          dataSource={this.dataSource}
          renderRow={(e) => <Text>{e.name}</Text> }
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