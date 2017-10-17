import React from "react";
import { DrawerNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SideBar from "./SideBar/index";


const DrawerSide = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);


export default DrawerSide;