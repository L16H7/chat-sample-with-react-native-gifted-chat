import {
  GET_AGENT_CLIENTS_SUCCESS
} from "../constants/types";


const INITIAL_STATE = {
  agent: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AGENT_CLIENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}