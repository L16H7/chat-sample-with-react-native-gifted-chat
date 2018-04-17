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

  _goToChat = () => {
    this.props.navigation.navigate('Chat', {
      isAgent: false,
      agent: {
        _id: 'C0001-AG0001',
        name: 'Smith',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/company-88b62.appspot.com/o/company-0001%2Fagents%2Fagent_smith.jpeg?alt=media&token=fd92e0ab-2c39-47ab-9d5c-c045e543193c'
      },
      client: {
        _id: 'C0001-CLI0001',
        name: 'Anderson',
        avatar: 'https://firebasestorage.googleapis.com/v0/b/company-88b62.appspot.com/o/company-0001%2Fclients%2Fneo.jpeg?alt=media&token=de9e35e0-7688-4e7e-a53e-9fca5530f5e6' 
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Navbar title={'Clients'} button={'Back'} 
          action={() => this.props.navigation.navigate('Agents')} />
        <Button title={'Test as Anderson'} 
          onPress={() => this._goToChat()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
};

export default connect(null, {
  // getAgentClients
})(ClientTestScreen);