import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Navbar from "../components/NavBar";


class FriendList extends Component {
    constructor(props) {
        super(props);
    }

    _chat = ( name, uid ) => {
        var obj = {
            name: name,
            uid: uid
        };

        this.props.navigation.navigate("Chat", obj);
    }

    _logout = () => {
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Navbar title={"Friends"} button={"Logout"} action={() => this._logout() } />
                <View style={{ paddingTop: 20 }}>
                    <Button title={"Richie"} onPress={() => this._chat("Richie", "admin")} />
                    <Button title={"Gilfoyle"} onPress={() => this._chat("Gilfoyle", "admin")} />
                    <Button title={"Danish"} onPress={() => this._chat("Danish", "admin")} />
                    <Button title={"Erlich"} onPress={() => this._chat("Erlich", "admin")} />
                    <Button title={"Big Head"} onPress={() => this._chat("Big Head", "admin")} />
                    <Button title={"Jared"} onPress={() => this._chat("Jared", "admin")} />
                </View>
            </View>
        );
    }
}

export default FriendList;