import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Navbar from "../components/NavBar";


class FriendList extends Component {
    constructor(props) {
        super(props);
    }

    _chat = ( name ) => {
        var obj = {
            name: name
        };

        this.props.navigation.navigate("Chat", obj);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Navbar title={"Friends"} button={""} action={() => this._chat("Chat") } />
                <View style={{ paddingTop: 20 }}>
                    <Button title={"Richie"} onPress={() => this._chat("Richie")} />
                    <Button title={"Gilfoyle"} onPress={() => this._chat("Gilfoyle")} />
                    <Button title={"Danish"} onPress={() => this._chat("Danish")} />
                    <Button title={"Erlich"} onPress={() => this._chat("Erlich")} />
                    <Button title={"Big Head"} onPress={() => this._chat("Big Head")} />
                    <Button title={"Jared"} onPress={() => this._chat("Jared")} />
                </View>
            </View>
        );
    }
}

export default FriendList;