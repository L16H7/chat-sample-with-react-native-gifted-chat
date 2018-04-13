/* eslint jsx-a11y/accessible-emoji: 0 */
import React, { Component } from 'react';
import NavBar, { NavTitle, NavButton, NavButtonText } from 'react-native-nav';

class NavBarChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <NavBar>
        <NavButton />
        <NavTitle>💬 {this.props.title}</NavTitle>
        <NavButton />
        <NavButton onPress={this.props.action}>
          <NavButtonText>
            {this.props.button}
          </NavButtonText>
        </NavButton>
      </NavBar>
    );
  }
}

export default NavBarChat;
