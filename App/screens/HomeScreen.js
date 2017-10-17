/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SceneDetection from "./SceneDetection";
import FacialAnalysis from "./FacialAnalysis";
import FaceComparison from "./FaceComparison";
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
    Tabs,
    Tab,
    TabHeading,
    Text,
} from 'native-base';

// const TabArray = [
//     {
//         name:'SceneDetection',
//         icon:'images',
//     },
//     {
//         name:'FacialAnalysis',
//         icon:'happy'
//     },
//     {
//         name:'FaceComparison',
//         icon:'person'
//     },
//     {
//         name:'CelebrityRecognition',
//         icon:'happy'
//     },
// ];

export default class HomeScreen extends Component<{}> {


    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                    <Title> Picture Analysis</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs style={{ elevation: 3 }} tabBarPosition="overlayBottom">
                    <Tab
                        heading={<TabHeading><Icon name="md-images" /><Text>Scene</Text></TabHeading>}>
                        <SceneDetection/>
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-happy" /><Text>Analysis</Text></TabHeading>}>
                        <FacialAnalysis/>
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-person" /><Text>Compare</Text></TabHeading>}>
                        <FaceComparison/>
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-happy" /><Text>Celeb</Text></TabHeading>}>
                        <CelebrityRecognition/>
                    </Tab>
                </Tabs>



            </Container>
        );
    }
}

// const AppNavigation = TabNavigator({
//
//     SceneDetection: {screen: SceneDetection,},
//     // ImageModeration: {screen: ImageModeration,},
//     FacialAnalysis: {screen: FacialAnalysis,},
//     FaceComparison: {screen: FaceComparison,},
//     // FacialRecognition: {screen: FacialRecognition,},
//     CelebrityRecognition: {screen: CelebrityRecognition,},
//
// }, {
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     animationEnabled: true,
//     lazy: true,
//     tabBarOptions: {
//         activeBackgroundColor: '#c7e9ff',
//         showIcon: true,
//         scrollEnabled: true,
//         style: {
//             height: 60,
//         },
//     },
//
// });