import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MessageContainer from './MessageContainer'
import InputGroup from './InputGroup'
import GlobalContext from './globalContext'

import MessageModel,{msgType} from '../data/message'
import User from '../data/msgUser'

export default class Chat extends Component {

    id = 0;
    messages = [new MessageModel(this.id++,new User(1,'ldx'),'hello',msgType.NORMAL),new MessageModel(this.id++,new User(2,'ldx2'),'world',msgType.NORMAL)
    ,new MessageModel(this.id++,undefined,'系统消息',msgType.SYSTEM),new MessageModel(this.id++,new User(1,'ldx'),'fhksfhksdhfkjshkhdshgshgks',msgType.NORMAL)];

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                userId: 1,
            },
            messages : this.messages
        }
    }

    render() {
        return (

            <View style={styles.container} onLayout={this.onMainViewLayout}>
                <GlobalContext.Provider value={this.state.userInfo}>
                    <MessageContainer messages = {this.state.messages}/>
                    <InputGroup onSend = {this.pushMessage}/>
                </GlobalContext.Provider>
            </View>
        );

    }


    onMainViewLayout = (e) => {
        // fix an issue when keyboard is dismissing during the initialization
        // const { layout } = e.nativeEvent;
        // if (this.getMaxHeight() !== layout.height || this.getIsFirstLayout() === true) {
        //     this.setMaxHeight(layout.height);
        //     this.setState({
        //         messagesContainerHeight: this.prepareMessagesContainerHeight(this.getBasicMessagesContainerHeight()),
        //     });
        // }
        // if (this.getIsFirstLayout() === true) {
        //     this.setIsFirstLayout(false);
        // }
        // alert("dfddf")
    }


    pushMessage=(message)=> {
        this.messages = this.messages.concat(
            new MessageModel(this.id++,new User(1,'ldx'),message,msgType.NORMAL)
        )
        this.setState({
            messages: this.messages
        })
    }


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});