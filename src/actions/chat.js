import * as firebase from "firebase";
import {
  SEND_MESSAGE
} from "../constants/types";


export const sendMessage = ({ friend, message }) => async dispatch => {
  try {
    let updates = {};
    updates[`/conversation/userId/${friend}/messages`] = message;

    await firebase.database().ref().update(updates);

    dispatch({
      type: SEND_MESSAGE,
      payload: "message sent"
    });
  } catch (e) {
    console.log(">> SAVE ERROR: ", e);
  }
};