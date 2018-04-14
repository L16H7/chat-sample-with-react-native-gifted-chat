import {
  SEND_MESSAGE,
  GET_MESSAGES_SUCCESS
} from "../constants/types";


const INITIAL_STATE = {
  messages: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.payload.reverse();
    case GET_MESSAGES_SUCCESS:
      return action.payload.reverse();
    default:
      return state;
  }
};