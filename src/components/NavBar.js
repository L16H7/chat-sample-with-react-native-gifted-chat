/* eslint jsx-a11y/accessible-emoji: 0 */
import React, { Component } from 'react';
import NavBar, { NavTitle, NavButton, NavButtonText } from 'react-native-nav';

class NavBarChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <NavBar>
        <NavButton />
        <NavTitle>💬 {this.props.friendName}</NavTitle>
        <NavButton />
        <NavButton onPress={this.props.navButton}>
          <NavButtonText>
            {"Friends"}
          </NavButtonText>
        </NavButton>
      </NavBar>
    );
  }
}

export default NavBarChat;
