import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MessageContainer from './MessageContainer'
import GlobalContext from './globalContext'

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                userId : 1,
            }
            
        }
    }

    render() {
        return (

            <View style={styles.container} onLayout={this.onMainViewLayout}>
                <GlobalContext.Provider value = {this.state.userInfo}>
                    <MessageContainer/>
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
        alert("dfddf")
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});