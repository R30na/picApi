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
import {

    StyleSheet,
    Image

} from 'react-native';

var AWS = require('aws-sdk/dist/aws-sdk-react-native');
import Camera from 'react-native-camera';


export default class FacialAnalysis extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            back: true,
            camType: Camera.constants.Type.front,
            showCam: false,
            showImage: false,
            ImageURL: '',
            base64: '',
            analyseButton: false,
        }
    }


    render() {

        return (
            <Container>
                <Content padder>
                    <Text>
                        This is FacialAnalysis Content Section
                    </Text>
                    <Button onPress={this.createCollection.bind(this)}><Text>Create Collection</Text></Button>
                    {this.state.showCam ? (
                        <Camera
                            ref={(cam) => {
                                this.camera = cam;
                            }}
                            style={styles.preview}
                            aspect={Camera.constants.Aspect.fill}
                            captureTarget={Camera.constants.CaptureTarget.memory}
                            type={this.state.camType}>
                            <Text style={styles.capture} onPress={this.flipCamera.bind(this)}><Icon
                                name="refresh"/></Text>
                            <Text style={styles.capture} onPress={this.takePicture.bind(this)}><Icon
                                name="camera"/></Text>

                        </Camera>
                    ) : (<Button onPress={this.showCam.bind(this)}><Text>Show Camera</Text></Button>)}
                    {this.state.showImage ? (
                        <Image source={{uri: this.state.ImageURL}} style={{height: 300, width: null, flex: 1}}/>
                    ) : (<Text>No Image Yet!</Text>)}

                    {this.state.analyseButton &&
                    <Button onPress={this.indexFace.bind(this)}><Text>Analyse</Text></Button>
                    }

                </Content>
            </Container>
        );

    }


    takePicture() {
        const options = {};
        this.camera.capture({metadata: options})
            .then((data) => {
                // alert(JSON.stringify(data.data,null,8));
                // console.log(data);
                this.setState({
                    ImageURL: 'data:image/jpeg;base64,' + data.data,
                    base64: data.data,
                    showImage: true,
                    showCam: false,
                    analyseButton: true
                });
            })
            .catch(err => console.error(err));
    }

    showCam() {
        this.setState({
            showCam: true
        });
    }

    showImage() {
        this.setState({
            showImage: true
        });
    }

    flipCamera() {
        if (this.state.back) {
            this.setState({
                back: false,
                camType: Camera.constants.Type.front,
            });
        } else {
            this.setState({
                back: true,
                camType: Camera.constants.Type.back,
            });
        }
    }

    createCollection() {
        var params = {
            CollectionId: "myphotos"
        };
        var rekognition = new AWS.Rekognition({
            accessKeyId: 'AKIAJRZSGYE4N735V7AA',
            secretAccessKey: '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',
            region: 'us-east-1'
        });

        rekognition.createCollection(params, function (err, data) {
            if (err) alert(err, err.stack);
            else alert(JSON.stringify(data));
        });
    }


    indexFace() {

        var Base64 = {
            _keyStr: this.state.base64, encode: function (e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            }, decode: function (e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r)
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i)
                    }
                }
                t = Base64._utf8_decode(t);
                return t
            }, _utf8_encode: function (e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r)
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128)
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128)
                    }
                }
                return t
            }, _utf8_decode: function (e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3
                    }
                }
                return t
            }
        }


        var rekognition = new AWS.Rekognition({
            accessKeyId: 'AKIAJRZSGYE4N735V7AA',
            secretAccessKey: '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',
            region: 'us-east-1'
        });

        var params = {
            CollectionId: "myphotos",
            Image: {
                Bytes: Base64.decode(this.state.base64)
            }
        };

        rekognition.indexFaces(params, function (err, data) {
            if (err) alert(err, err.stack);
            else alert(JSON.stringify(data, null, 8));
        });
    }

}

const styles = StyleSheet.create({
    preview: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    capture: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 9,
        color: '#000',
        padding: 10,
        margin: 40
    }
});