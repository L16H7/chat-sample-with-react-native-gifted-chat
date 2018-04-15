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
import { NavButton, NavButtonText } from "react-native-nav";
import { Actions } from "react-native-gifted-chat";
import CameraRollPicker from "react-native-camera-roll-picker";


class UploadAction extends Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false
    };
  }

  componentDidMount() {
  }

  setImages(images) {
    this._images = images;
  }
  
  getImages() {
    return this._images;
  }

  selectImages = (images) => {
    this.setImages(images);
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

  sendImages = () => {
    const images = this.getImages().map((image) => {
      return {
        image: image.uri,
      };
    });
    this.props.onSend(images);
    this.setImages([]);
    this.setModalVisible(false);
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
          <CameraRollPicker
            maximum={10}
            imagesPerRow={4}
            callback={this.selectImages}
            selected={[]}
          />
          <Button title={"Send"} onPress={() => this.sendImages()} />
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