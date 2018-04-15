import React, { Component } from "react";
import { 
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text
} from "react-native";
import { Actions } from "react-native-gifted-chat";


class UploadAction extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    return (
      <View style={styles.wrapper} >
        <Text style={styles.iconText} > + </Text>
      </View>
    );
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} >
        {this.renderIcon()}        
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

export default UploadAction;