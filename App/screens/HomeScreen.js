/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {TabBarBottom, TabNavigator} from "react-navigation";
import SceneDetection from "./SceneDetection";
import ImageModeration from "./ImageModeration";
import FacialAnalysis from "./FacialAnalysis";
import FaceComparison from "./FaceComparison";
import FacialRecognition from "./FacialRecognition";
import CelebrityRecognition from "./CelebrityRecognition";
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text, Root
} from 'native-base';

export default class HomeScreen extends Component<{}> {

    static navigationOptions = {
        title: 'Picture Analysis',

    }

    render() {
        return (
            <AppNavigation/>
        );
    }
}

const AppNavigation = TabNavigator({

    SceneDetection: {screen: SceneDetection,},
    // ImageModeration: {screen: ImageModeration,},
    FacialAnalysis: {screen: FacialAnalysis,},
    FaceComparison: {screen: FaceComparison,},
    // FacialRecognition: {screen: FacialRecognition,},
    CelebrityRecognition: {screen: CelebrityRecognition,},

}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
        activeBackgroundColor: '#c7e9ff',
        showIcon: true,
        scrollEnabled: true,
        style: {
            height: 60,
        },
    },

});