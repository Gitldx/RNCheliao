import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import GlobalContext from './globalContext'
import Bubble from './Bubble'
import SystemMessage from './SystemMessage'
import UserTitle from './UserTitle'
import Color from '../data/Colors'
import { msgType } from '../data/message'

export default class Message extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const msg = this.props.msg.msgType == msgType.SYSTEM ? <SystemMessage msg = {this.props.msg}/> :
            <View>
                <GlobalContext.Consumer>
                    {userInfo =>
                        <View style={[
                            styles[this.getPostion(userInfo)].container,
                            { marginBottom : this.isCurrentUser(userInfo) ? 2 : 10 }
                            // { marginBottom: sameUser ? 2 : 10 },
                            // !this.props.inverted && { marginBottom: 2 },
                            // this.props.containerStyle[this.props.position],
                        ]}>
                            {this.isCurrentUser(userInfo) ? null : this.renderAvatar(userInfo)}
                            <View style={styles[this.getPostion(userInfo)].bubbleWrapple}>
                                <UserTitle userInfo={this.props.msg.msgUser} />
                                <Bubble position={this.getPostion(userInfo)} messageText={this.props.msg.text} />
                            </View>

                            {this.isCurrentUser(userInfo) ? this.renderAvatar(userInfo) : null}
                        </View>

                    }
                </GlobalContext.Consumer>

            </View>

        return msg;

    }


    renderAvatar = (userInfo) => {

        return (
            <TouchableOpacity onPress={() => alert("avatar pressed")} disabled={this.isCurrentUser(userInfo) ? true : false}>
                <Image
                    style={[styles.avatarStyle, styles.avatarTransparent]}
                    source={require('../image/img1.jpg')}
                />
            </TouchableOpacity>
        )
    }

    isCurrentUser = (userInfo) => {
        // alert(`isCurrentUser --> ${JSON.stringify(this.props.msg)}`)
        return this.props.msg.msgUser.userId == userInfo.userId
    }

    getPostion = (userInfo) => {
        return this.isCurrentUser(userInfo) ? "right" : "left";
    }
}


Message.prototypes = {
    msg: PropTypes.object,
}





const styles = {
    left: StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            marginLeft: 8,
            marginRight: 0,
        },
    }),
    right: StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginLeft: 0,
            marginRight: 8,
        },
    }),
    bubbleWrapple: {
        flexDirection: "column",
    },
    avatarStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    avatarTransparent: {
        backgroundColor: Color.backgroundTransparent,
    }
};