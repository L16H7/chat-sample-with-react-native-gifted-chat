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
import { ImagePicker } from "expo";


class UploadAction extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
    });

    if (!pickerResult.cancelled) {
      console.log(">>PickerResult URI");
      console.log(pickerResult.uri);
      this.props.onSend(pickerResult);
    }
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
          this.pickImage();
          break;
        case 1:
          alert("File Upload");
          break;
        default:
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onActionPress} >
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