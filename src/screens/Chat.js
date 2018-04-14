import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { SwitchNavigation } from "react-navigation";
import NavBar from "../components/NavBar";
import { GiftedChat } from 'react-native-gifted-chat';
import { CustomView } from "../components/CustomView";
import messagesData from "../../data"; 


import { connect } from "react-redux";
import { sendMessage, getMessages } from "../actions/";


const filterBotMessages = (message) => !message.system && message.user && message.user._id && message.user._id === 2;
const findStep = (step) => (_, index) => index === step - 1;


class Chat extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      messages: [],
      step: 0,
    };
    this.onSend = this.onSend.bind(this);
    this.parsePatterns = this.parsePatterns.bind(this);
  }

  componentWillMount() {
    const name = (this.props.navigation.state.params) ? this.props.navigation.state.params.name : "Richie";
    this.props.getMessages("userId", name);
    // init with only system messages
    // this.setState({ messages: messagesData.filter((message) => message.system) });
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ messages: nextProps.messages });
  }

  onSendMessage = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, 
        [{ ...messages[0], sent: true, received: true }]),
    }));

    const friend = (this.props.navigation.state.params) ? this.props.navigation.state.params.name : "Richie";

    var message = [ ...this.state.messages, messages[0]];
    console.log(message);
    this.props.sendMessage({ friend, message })
  }

  onSend(messages = []) {
    const step = this.state.step + 1;
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [{ ...messages[0], sent: true, received: true }]),
      step,
    }));
    // set Timeout(() => this.botSend(step), 1500 + Math.round(Math.random() * 1000));
  }

  botSend(step = 0) {
    const newMessage = messagesData
      .reverse()
      .filter(filterBotMessages)
      .find(findStep(step));
    if (newMessage) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, newMessage),
      }));
    }
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

  render() {
    const name = (this.props.navigation.state.params) ? this.props.navigation.state.params.name : "Richie";
    return (
      <View style={{ flex: 1 }}>
        <NavBar title={name} button={"Friends"} action={this._friendList} />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSendMessage}
          renderCustomView={CustomView}
          user={{
            _id: 1,
          }}
          parsePatterns={this.parsePatterns}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MSTP: ");
  console.log(state);
  const messages = state.chat;
  return { messages };
};

export default connect(mapStateToProps, { sendMessage, getMessages })(Chat);