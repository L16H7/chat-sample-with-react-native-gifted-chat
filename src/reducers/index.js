import { combineReducers } from 'redux';
import ChatReducer from './chat';
import AgentReducer from './agent';


export default combineReducers({
  chat: ChatReducer,
  agent: AgentReducer
});