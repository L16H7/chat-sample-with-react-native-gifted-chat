import * as firebase from "firebase";
import { Platform } from "react-native";
// import RNFetchBlob from "react-native-fetch-blob";
import {
  SEND_MESSAGE,
  GET_MESSAGES_SUCCESS,
  IMAGE_UPLOAD_SUCCESS
} from "../constants/types";


export const sendMessage = ({ friend, messagesUpdate }) => async dispatch => {
  try {
    let updates = {};
    updates[`/conversation/userId/${friend}/messages`] = messagesUpdate;

    await firebase.database().ref().update(updates);

    dispatch({
      type: SEND_MESSAGE,
      payload: messagesUpdate 
    });
  } catch (e) {
    console.log(">> SAVE ERROR: ", e);
  }
};

export const getMessages = (userId, friend) => {
  return (dispatch) => {
    firebase.database().ref(`conversation/${userId}/${friend}/messages`)
      .on("value", snapshot => {
        if (snapshot.val()) {
          dispatch({ type: GET_MESSAGES_SUCCESS, payload: snapshot.val() });
        }
      });
  };
};

export const uploadImageAsync = ({ uri }) => async dispatch => {
  console.log(uri);
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());

  const snapshot = await ref.put(blob);
  console.log(snapshot.downloadURL);
  // return snapshot.downloadURL;
  dispatch({
    type: IMAGE_UPLOAD_SUCCESS,
    payload: snapshot.downloadURL
  });
}

/*
export const uploadImage = (uri, mime = "application/octet-stream") => {
  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = Blob.fs;

  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === "ios" ? uri.replace("file://", '') : uri;
      const sessionId = new Date().getTime();

      let uploadBlob = null;
      const imageRef = firebase.storage().ref("images").child("houses");

      fs.readFile(uploadUri, "base64")
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then((blob) => {
          uploadBlob = blob;
          return imageRef.put(blob, { contentType: mime });
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then((url) => {
          resolve(url);
          storeReference(url, sessionId);
        })
        .catch((error) => {
          reject(error);
        })
    });
  };
}
*/