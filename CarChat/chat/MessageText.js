import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class MessageText extends React.Component {

    render() {
        return (
            <View
                style={[
                    styles[this.props.position].container,
                ]}
            >
                {/* <ParsedText
                    style={[
                        styles[this.props.position].text,
                        this.props.textStyle[this.props.position],
                        this.props.customTextStyle,
                    ]}
                    parse={[
                        ...this.props.parsePatterns(linkStyle),
                        { type: 'url', style: linkStyle, onPress: this.onUrlPress },
                        { type: 'phone', style: linkStyle, onPress: this.onPhonePress },
                        { type: 'email', style: linkStyle, onPress: this.onEmailPress },
                    ]}
                    childrenProps={{ ...this.props.textProps }}
                >
                    {this.props.currentMessage.text}
                </ParsedText> */}
                <Text style={[
                    styles[this.props.position].text,
                ]}>
                    {this.props.messageText}
                </Text>
            </View>
        )
    }
}




const textStyle = {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
};

const styles = {
    left: StyleSheet.create({
        container: {},
        text: {
            color: 'black',
            ...textStyle,
        },
        link: {
            color: 'black',
            textDecorationLine: 'underline',
        },
    }),
    right: StyleSheet.create({
        container: {},
        text: {
            color: 'white',
            ...textStyle,
        },
        link: {
            color: 'white',
            textDecorationLine: 'underline',
        },
    }),
};