import React, { Component } from "react";
import { View, Button, Text, Platform } from "react-native";
import { SwitchNavigation } from "react-navigation";
import NavBar from "../components/NavBar";
import { GiftedChat, Actions } from 'react-native-gifted-chat';
import { CustomView } from "../components/CustomView";
import UploadAction from "../components/UploadAction";
import SlackMessage from '../components/SlackMessage';


import { connect } from "react-redux";
import { sendMessage, getMessages } from "../actions/";


class ChatScreen extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      messages: [],
    };
    this.parsePatterns = this.parsePatterns.bind(this);

    console.log('>>CS const');
    console.log(this.props.navigation.state.params);

    this.agent = this.props.navigation.state.params.agent;
    this.client = this.props.navigation.state.params.client;
    this.user = (this.props.navigation.state.params.isAgent) ?
      Object.assign({}, this.agent) : Object.assign({}, this.client);

    this.chatTitle = (this.props.navigation.state.params.isAgent) ?
      this.client.name : this.agent.name;
  }

  componentDidMount() {
    this.props.getMessages('company-0001', this.agent._id, this.client._id);
    console.log(this.props.navigation);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ messages: nextProps.messages.reverse() });
  }

 onSendMessage = (messages = []) => {
    console.log(">>onSendMessage");
    console.log(messages);

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, 
        [{ ...messages[0], sent: true, received: true }]),
    }));


    let messagesUpdate = this.state.messages.slice();
    messagesUpdate.reverse();

    if (!messages[0].image) {
      messagesUpdate.push(messages[0]);
    }
    this.props.sendMessage('company-0001', this.agent._id, this.client._id, messagesUpdate);
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle, color: 'orange' },
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
    ];
  }

  renderCustomActions(props) {
    return (
      <UploadAction {...props} />      
    );
  }

  renderMessage(props) {
    return (
      <SlackMessage {...props} />
    )
  }

  render() {
    // TO-DO: user in GiftedChat should be Auth user
    
    return (
      <View style={{ flex: 1 }}>
        <NavBar title={this.chatTitle} button={'Back'} action={() => this.props.navigation.navigate('Agents')} />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSendMessage}
          renderCustomView={CustomView}
          renderActions={this.renderCustomActions}
          renderMessage={this.renderMessage}
          // user={{
          //   _id: _id,
          // }}
          user={this.user}
          parsePatterns={this.parsePatterns}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const messages = state.chat;
  return { messages };
};

export default connect(mapStateToProps, { 
  sendMessage, 
  getMessages,
})(ChatScreen);
