import * as firebase from "firebase";
import {
  SEND_MESSAGE,
  GET_MESSAGES_SUCCESS
} from "../constants/types";


export const sendMessage = ({ friend, message }) => async dispatch => {
  try {
    let updates = {};
    updates[`/conversation/userId/${friend}/messages`] = message;

    await firebase.database().ref().update(updates);

    dispatch({
      type: SEND_MESSAGE,
      payload: "" 
    });
  } catch (e) {
    console.log(">> SAVE ERROR: ", e);
  }
};

export const getMessages = (userId, friend) => {
  return (dispatch) => {
    firebase.database().ref(`conversation/${userId}/${friend}/messages`)
      .on("value", snapshot => {
        dispatch({ type: GET_MESSAGES_SUCCESS, payload: snapshot.val() });
      });
  };
};