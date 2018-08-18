import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import GlobalContext from './globalContext'

export default class UserTitle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GlobalContext.Consumer>
                {userInfo =>
                    <View style={styles[this.getPostion(userInfo)].container}>
                        <Text style={textStyle}>{this.props.userInfo.name}</Text>
                    </View>
                }
            </GlobalContext.Consumer>

        )
    }

    getPostion = (userInfo) => {
        return this.isCurrentUser(userInfo) ? "right" : "left";
    }

    isCurrentUser = (userInfo) => {

        return this.props.userInfo.userId == userInfo.userId
    }
}


const textStyle = {
    fontSize: 12,
    backgroundColor: 'transparent',
  };

const styles = {
    left: StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft : 8
        }
    }),
    right: StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 8,
        }
    })
}