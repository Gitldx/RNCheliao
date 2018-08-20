import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import Color from '../data/Colors'


export default class SystemMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.wrapper]}>
                    <Text style={[styles.text]}>{this.props.msg.text}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginTop: 5,
      marginBottom: 10,
    },
    text: {
      backgroundColor: Color.backgroundTransparent,
      color: Color.defaultColor,
      fontSize: 12,
      fontWeight: '300',
    },
  });