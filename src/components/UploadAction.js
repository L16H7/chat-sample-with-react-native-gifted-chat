import PropTypes from "prop-types";
import React, { Component } from "react";
import { 
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  Button
} from "react-native";
import Navbar from "../components/NavBar";
import { Actions } from "react-native-gifted-chat";


class UploadAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  renderIcon() {
    return (
      <View style={styles.wrapper} >
        <Text style={styles.iconText} > + </Text>
      </View>
    );
  }

  onActionPress = () => {
    const options = ["Image", "File", "Cancel"];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          this.setModalVisible(true);
          break;
        case 1:
          alert("File Upload");
          break;
        default:
      }
    });
  }

  setModalVisible(visible = false) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onActionPress} >
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false); }}>
          <Navbar title={"Image Upload"} button={"Cancel"} action={() => this.setModalVisible(false)} />
        </Modal>
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

UploadAction.contextTypes = {
  actionSheet: PropTypes.func,
};

export default UploadAction;