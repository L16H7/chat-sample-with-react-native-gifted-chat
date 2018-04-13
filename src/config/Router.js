import React from "react";
import { SwitchNavigator } from "react-navigation";
import Chat from "../screens/Chat";
import FriendList from "../screens/FriendList";


export const SwitchNav = SwitchNavigator({
    Chat: Chat,
    List: FriendList 
},
{
    initialRouteName: "Chat"
}
);
