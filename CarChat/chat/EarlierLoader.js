import React from 'react';
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewPropTypes,
} from 'react-native';

import Color from '../data/Colors';


export default class EarlierLoader extends React.Component {

    count = 0;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={
                    this.toggleActivityIndicator
                }
            // disabled={this.props.isLoadingEarlier === true}
            >
                <View style={styles.wrapper}>
                    {this.renderLoading()}
                </View>
            </TouchableOpacity>
        )
    }

    toggleActivityIndicator = () => {
        this.count++;
        this.setState({ isLoading: !this.state.isLoading })
    }



    renderLoading() {
        if (this.count > 4) {
            return (
                <Text style={styles.text}>
                    没有更多消息了
                </Text>
            );
        }
        
        return (
            <View>
                <Text style={styles.text}>
                    更多消息
                </Text>
                {
                    this.state.isLoading &&
                    <ActivityIndicator
                        color="white"
                        size="small"
                        style={[styles.activityIndicator, this.props.activityIndicatorStyle]}
                    />
                }

            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.defaultColor,
        borderRadius: 15,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        backgroundColor: Color.backgroundTransparent,
        color: Color.white,
        fontSize: 12,
    },
    activityIndicator: {
        marginTop: Platform.select({
            ios: -14,
            android: -16,
        }),
    },
});