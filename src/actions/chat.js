import firebase from "firebase";
import {
  SEND_MESSAGE
} from "../constants/types";


export const sendMessage = ({ message }) => {
  return (dispatch) => {
    firebase.database().ref(`conversation/userId/friendId`)
      .push({ message })
      .then(() => {
        dispatch({ type: SEND_MESSAGE });
      });
  }
};