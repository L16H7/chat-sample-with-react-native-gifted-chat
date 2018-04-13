import firebase from "firebase";
import {
  SEND_MESSAGE
} from "../constants/types";


export const sendMessage = ({ friend, message }) => {
  return (dispatch) => {
    firebase.database().ref(`conversation/userId/${friend}`)
      .push({ message })
      .then(() => {
        dispatch({ type: SEND_MESSAGE });
      });
  }
};