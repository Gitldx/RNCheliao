import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

import Color from '../data/Colors'


export default class StationAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeoutAnimate: new Animated.Value(0.8),
            YAnimate: new Animated.Value(-40)
        }
    }

    componentDidMount() {
        Animated.spring(this.state.YAnimate,
            {
                toValue: 0
            }).start(this.fadeOut)
            
    }

    render() {
        const { fadeoutAnimate } = this.state
        return (
            <Animated.View style={[styles.container, { opacity: fadeoutAnimate, transform:[{ translateY: this.state.YAnimate }]  }]}>
                <TouchableOpacity onPress={() => this.props.onPress('Y')}>
                    <Text style={styles.text}>是</Text>
                </TouchableOpacity>

                <View style={{ paddingLeft: 20, paddingRight: 20, backgroundColor: 'grey' }}>
                    <Text style={styles.text}>站</Text>
                </View>


                <TouchableOpacity onPress={() => this.props.onPress('N')}>
                    <Text style={styles.text}>否</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }


    fadeOut = ()=>{
        Animated.timing(
            this.state.fadeoutAnimate,
            {
                toValue: 0.2,
                duration: 3000,
            }
        ).start(() => { this.props.onFadeOut() });
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 15,
        position: 'absolute',
        top: 40,
        alignSelf: 'center',
        // paddingLeft: 50,
        // paddingRight:50,
        // paddingTop : 5,
        // paddingBottom : 5
    },
    text: {
        color: 'white'
    }

})