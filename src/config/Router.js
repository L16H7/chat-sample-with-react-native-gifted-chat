import React from "react";
import { SwitchNavigator } from "react-navigation";
import Chat from "../screens/Chat";
import FriendList from "../screens/FriendList";
import Login from "../screens/Login";
import AgentListScreen from "../screens/AgentListScreen";


export const SwitchNav = SwitchNavigator({
    Agents: AgentListScreen,
    Login: Login,
    Chat: Chat,
    List: FriendList 
},
{
    initialRouteName: 'Agents'
    // initialRouteName: 'Login'
}
);
