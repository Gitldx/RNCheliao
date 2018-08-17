import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes, StyleSheet, Text } from 'react-native';

import GlobalContext from './globalContext'
import Bubble from './Bubble'

export default class Message extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <GlobalContext.Consumer>
                    {userInfo =>
                        <View style={[
                            styles[this.getPostion(userInfo)].container,
                            // { marginBottom: sameUser ? 2 : 10 },
                            // !this.props.inverted && { marginBottom: 2 },
                            // this.props.containerStyle[this.props.position],
                        ]}>
                            {this.isCurrentUser(userInfo) ? null : <Text>头像</Text>}
                            {/* <Text>{this.props.msg.text}</Text> */}
                            <Bubble position = {this.getPostion(userInfo)} messageText = {this.props.msg.text}/>
                            {this.isCurrentUser(userInfo)  ? <Text>头像</Text> : null}
                        </View>

                    }
                </GlobalContext.Consumer>

            </View>
        )

    }

    isCurrentUser = (userInfo)=>{
        return this.props.msg.msgUser.userId === userInfo.userId
    }

    getPostion = (userInfo)=>{
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
  };