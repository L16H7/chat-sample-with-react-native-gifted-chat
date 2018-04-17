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


const filterBotMessages = (message) => !message.system && message.user && message.user._id && message.user._id === 2;
const findStep = (step) => (_, index) => index === step - 1;


class Chat extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      messages: [],
    };
    this.parsePatterns = this.parsePatterns.bind(this);

    console.log(this.props);
  }

  componentDidMount() {
    const name = (this.props.navigation.state.params) ? this.props.navigation.state.params.name : "Richie";
    this.props.getMessages("userId", name);
    console.log(name);
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

    const friend = (this.props.navigation.state.params) ? this.props.navigation.state.params.name : "Richie";

    var messagesUpdate = this.state.messages.slice();
    messagesUpdate.reverse();
    // console.log(messagesUpdate);

    if (!messages[0].image) {
      messagesUpdate.push(messages[0]);
    }
    this.props.sendMessage({ friend, messagesUpdate })
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
  

  _friendList = () => {
    this.props.navigation.navigate("List");
  }

  _login = () => {
    this.props.navigation.navigate("Login");
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
    // TO-DO: change _id from authenticated person's id
    const _id = this.props.navigation.state.params.agentId;
    const name = this.props.navigation.state.params.name;
    
    return (
      <View style={{ flex: 1 }}>
        <NavBar title={name} button={'Back'} />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSendMessage}
          renderCustomView={CustomView}
          renderActions={this.renderCustomActions}
          renderMessage={this.renderMessage}
          user={{
            _id: _id,
          }}
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
})(Chat);
