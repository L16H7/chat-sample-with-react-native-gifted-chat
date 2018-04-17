import * as firebase from 'firebase';
import { GET_AGENTS_SUCCESS } from '../constants/types';


export const getAgents = (companyId) => {
  return (dispatch) => {
    firebase.database().ref(`${companyId}/agents`)
      .once('value', snapshot => {
        if (snapshot.val()) {
          dispatch({ type: GET_AGENTS_SUCCESS, payload: snapshot.val() });
        }
      });
  };
}