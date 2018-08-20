import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, ListView } from 'react-native';
import MessageModel,{msgType} from '../data/message'
import User from '../data/msgUser'
import Message from './Message'
import EarlierLoader from './EarlierLoader'



export default class MessageContainer extends Component {

    messages = [new MessageModel(1,new User(1,'ldx'),'hello',msgType.NORMAL),new MessageModel(2,new User(2,'ldx2'),'world',msgType.NORMAL)
    ,new MessageModel(3,undefined,'系统消息',msgType.SYSTEM),new MessageModel(4,new User(1,'ldx'),'fhksfhksdhfkjshkhdshgshgks',msgType.NORMAL)];

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.messages),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderEarlierLoader}
                />
            </View>
        )
    }


    renderRow = (message) => {
        if (!message._id && message._id !== 0) {
            console.warn('GiftedChat: `_id` is missing for message', JSON.stringify(message));
        }
        if (!message.msgUser) {
            if (!message.msgType == msgType.SYSTEM) {
                console.warn('GiftedChat: `user` is missing for message', JSON.stringify(message));
            }
            message.user = {};
        }

        // const messageProps = {
        //     ...this.props,
        //     key: message._id,
        //     currentMessage: message,
        //     previousMessage: message.previousMessage,
        //     nextMessage: message.nextMessage,
        //     position: message.user._id === this.props.user._id ? 'right' : 'left',
        // };


        return <Message key = {message._id} msg ={message}/>;
        
    }

    renderEarlierLoader=()=>{
        return <EarlierLoader/>
    }

    componentDidUpdate(){
        console.warn("MessageContainer reRender")
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});