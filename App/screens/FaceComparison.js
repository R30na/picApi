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

export default class FaceComparison extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: 'Face Compare',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" active={true} style={{color:tintColor}}/>
        ),
    };

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is FaceComparison Content Section
                    </Text>
                </Content>

            </Container>
        );
    }
}

