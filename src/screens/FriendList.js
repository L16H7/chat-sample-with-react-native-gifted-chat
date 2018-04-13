import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Navbar from "../components/NavBar";


class FriendList extends Component {
    constructor(props) {
        super(props);
    }

    _chat = () => {
        console.log("GO TO CHAT");
        console.log(this.props);
        this.props.navigation.navigate("Chat", this.props);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-around" }}>
                <Navbar title={"FRIENDS"} button={"Chat"} action={this._chat} />
                <Button title={"Richie"} onPress={this._chat} />
                <Button title={"Gilfoyle"} onPress={this._chat} />
                <Button title={"Danish"} onPress={this._chat} />
                <Button title={"Erlich"} onPress={this._chat} />
                <Button title={"Big Head"} onPress={this._chat} />
                <Button title={"Jared"} onPress={this._chat} />
            </View>
        );
    }
}

export default FriendList;