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

export default class ImageModeration extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: 'Image Moderation',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="eye" active={true} style={{color:tintColor}}/>
        ),
    };

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is ImageModeration Content Section
                    </Text>
                </Content>
            </Container>
        );
    }
}

