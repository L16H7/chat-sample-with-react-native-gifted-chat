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
import { ImagePicker } from "expo";
import firebase from "firebase";


class UploadAction extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
    });

    this._handleImagePicked(pickerResult);
  }

  _handleImagePicked = async pickerResult => {
    var downloadURL = "";
    try {
      if (!pickerResult.cancelled) {
        downloadURL = await uploadImageAsync(pickerResult.uri);
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    } finally {
      console.log(">>finally");
      var message = {
        image: downloadURL
      }
      console.log(downloadURL);
      this.props.onSend(message);
    }
  };

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
          this._pickImage();
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

async function uploadImageAsync(uri) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .child("test");
  
    const snapshot = await ref.put(blob);
    return snapshot.downloadURL;
  }
  
 