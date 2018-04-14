import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Navbar from "../components/NavBar";


class Login extends Component {
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

    _friendList = () => {
        this.props.navigation.navigate("List");
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Navbar title={"Login"} button={""} action={() => this._friendList() } />
                <View>
                    <Button title={"Login as User"} onPress={() => this._friendList()} />
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Button title={"Richie"} onPress={() => this._chat("Richie", 1)} />
                    <Button title={"Gilfoyle"} onPress={() => this._chat("Gilfoyle", 2)} />
                    <Button title={"Danish"} onPress={() => this._chat("Danish", 3)} />
                    <Button title={"Erlich"} onPress={() => this._chat("Erlich", 4)} />
                    <Button title={"Big Head"} onPress={() => this._chat("Big Head", 5)} />
                    <Button title={"Jared"} onPress={() => this._chat("Jared", 6)} />
                </View>
            </View>
        );
    }
}

export default Login;