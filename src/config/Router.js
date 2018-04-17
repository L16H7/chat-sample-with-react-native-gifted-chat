import React from "react";
import { SwitchNavigator } from "react-navigation";
import ChatScreen from '../screens/ChatScreen';
import FriendList from "../screens/FriendList";
import Login from "../screens/Login";
import AgentListScreen from "../screens/AgentListScreen";
import ClientListScreen from '../screens/ClientListScreen';
import ClientTestScreen from '../screens/ClientTestScreen';


export const SwitchNav = SwitchNavigator({
    Agents: AgentListScreen,
    Clients: ClientListScreen,
    Login: Login,
    Chat: ChatScreen,
    List: FriendList,
    Test: ClientTestScreen
},
{
    initialRouteName: 'Agents'
}
);
