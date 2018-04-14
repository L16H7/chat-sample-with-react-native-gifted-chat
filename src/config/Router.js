import React from "react";
import { SwitchNavigator } from "react-navigation";
import Chat from "../screens/Chat";
import FriendList from "../screens/FriendList";
import Login from "../screens/Login";


export const SwitchNav = SwitchNavigator({
    Login: Login,
    Chat: Chat,
    List: FriendList 
},
{
    initialRouteName: "Login"
}
);
