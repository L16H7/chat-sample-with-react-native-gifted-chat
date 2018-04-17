import * as firebase from 'firebase';
import { GET_AGENT_CLIENTS_SUCCESS } from '../constants/types';


export const getAgentClients = (companyId, agentId) => {
  return (dispatch) => {
    firebase.database().ref(`${companyId}/agents/${agentId}`)
      .once('value', snapshot => {
        if (snapshot.val()) {
          dispatch({ type: GET_AGENT_CLIENTS_SUCCESS, payload: snapshot.val() });
        }
      });
  };
}