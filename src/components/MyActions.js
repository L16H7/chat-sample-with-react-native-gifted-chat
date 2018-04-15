import React, { Component } from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet
} from "react-native";
import { Actions } from "react-native-gifted-chat";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import CameraRollPicker from "react-native-camera-roll-picker";


var MyActions = function(props) {
  var modalVisible = false;
  var setModalVisible = function (visible = false) {
    modalVisible = visible;
  }

  var renderIcon = function() {
    return (
      <View style={styles.wrapper} >
        <Text style={styles.iconText} > + </Text>
      </View>
    );
  }

  var onActionPress2 = function() {
    const options = {
      'Image': (props) => {
        alert('option 1');
      },
      'File': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
  
    return (
      <Actions
        options={options}
      />
    );
  }

  var onActionPress = function() {
    setModalVisible(true);
  }

  var renderNavBar = function() {
    return (
      <NavBar style={{
        statusBar: {
          backgroundColor: '#FFF',
        },
        navBar: {
          backgroundColor: '#FFF',
        },
      }}>
        <NavButton onPress={() => {
          setModalVisible(false);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Cancel'}
          </NavButtonText>
        </NavButton>
        <NavTitle style={{
          color: '#000',
        }}>
          {'Camera Roll'}
        </NavTitle>
        <NavButton onPress={() => {
          setModalVisible(false);

          // const images = this.getImages().map((image) => {
          //   return {
          //     image: image.uri,
          //   };
          // });
          // this.props.onSend(images);
          // this.setImages([]);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Send'}
          </NavButtonText>
        </NavButton>
      </NavBar>
    );
  }


 return (
    <TouchableOpacity style={styles.container} onPress={onActionPress()}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {renderNavBar()}
        <CameraRollPicker />
      </Modal>
      {renderIcon()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  wrapper: {
    borderRadius: 13,
    borderColor: "#b2b2b2",
    borderWidth: 2,
    flex: 1,
  },

  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center"
  }
});

export default MyActions;