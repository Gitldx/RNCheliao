import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Color from '../data/Colors';



export default class InputGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusing: false,
            message : "",
        }
    }

    render() {
        return (
            <View style={styles.primary}>
                <TextInput ref={(input=>{this.input = input})} style={styles.textInput} placeholder="输入消息..." multiline={true} 
                onChangeText = {(text)=>this.setState({message : text})} value = {this.state.message}
                onFocus={this.onFocus} onBlur={this.onBlur}/>
                {
                    this.state.focusing && 
                    <View style={styles.sendButton}>
                        <Button title="发送" onPress={this.onSend} />
                    </View>
                }


            </View>

        )

    }

    onFocus = ()=>{
        this.setState({focusing : true});
    }

    onBlur = ()=>{
        
        if(this.state.message.length > 0){return;}
        this.setState({focusing : false});
    }

    onSend = ()=>{
        this.setState({message:""});

    }
}



const styles = StyleSheet.create({
    container: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Color.defaultColor,
        backgroundColor: Color.white,
        bottom: 0,
        left: 0,
        right: 0,
    },
    primary: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 16,
        marginTop: Platform.select({
            ios: 6,
            android: 0,
        }),
        marginBottom: Platform.select({
            ios: 5,
            android: 3,
        }),
    },
    sendButton: {
        marginTop: Platform.select({
            ios: 6,
            android: 0,
        }),
        marginBottom: Platform.select({
            ios: 5,
            android: 3,
        }),

    },
    accessory: {
        height: 44,
    },
});