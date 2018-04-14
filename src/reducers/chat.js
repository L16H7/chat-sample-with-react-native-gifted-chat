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
      // return action.payload;
      break;
    case GET_MESSAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};