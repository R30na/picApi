/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
    Text
} from 'native-base';


export default class SceneDetection extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: 'Scene Detection',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="images" active={true} style={{color:tintColor}}/>
        ),
    };

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        This is Scene Detection Content Section
                    </Text>
                </Content>
            </Container>
        );
    }
}


