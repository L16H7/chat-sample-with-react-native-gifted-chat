import {
  SEND_MESSAGE
} from "../constants/types";


INITIAL_STATE = {
  messages: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};