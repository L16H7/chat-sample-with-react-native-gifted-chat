import {
  GET_AGENTS_SUCCESS
} from "../constants/types";


const INITIAL_STATE = {
  agents: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AGENTS_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}