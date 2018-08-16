import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes, StyleSheet, Text } from 'react-native';

import GlobalContext from './globalContext'

export default class Message extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <GlobalContext.Consumer>
                    {userInfo =>
                        <Text>
                            {this.props.msg + "--->" + userInfo.userId}
                        </Text>
                    }
                </GlobalContext.Consumer>

            </View>
        )

    }
}


Message.prototypes = {
    msg: PropTypes.string,
}