/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';

import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import DrawerSide from "./App/components/Drawer";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: DrawerSide },

    }, {
        initialRouteName: "Drawer",
        headerMode: "none",
    });



export default class App extends Component<{}> {


    render() {
        return (
            <Root>
                <AppNavigator />
            </Root>
        );
    }
}
