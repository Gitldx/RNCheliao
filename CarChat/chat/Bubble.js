import React from 'react';
import {
  Text,
  Clipboard,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import MessageText from './MessageText'

import Color from '../data/Colors'

export default class Bubble extends React.Component {

  render() {
    return (
      <View
        style={[
          styles[this.props.position].container,
          // this.props.containerStyle[this.props.position],
        ]}
      >
        <View
          style={[
            styles[this.props.position].wrapper,
            // this.props.wrapperStyle[this.props.position],
            // this.handleBubbleToNext(),
            // this.handleBubbleToPrevious(),
          ]}
        >
          <TouchableOpacity
            onPress={this.onPress} activeOpacity = {0.2} 
          >
            <View>
              {/* {this.renderCustomView()} */}
              {/* {this.renderMessageImage()} */}
              {/* {this.renderMessageText()} */}
              
              <MessageText position = {this.props.position} messageText = {this.props.messageText}/>
              {/* <View style={[styles.bottom, this.props.bottomContainerStyle[this.props.position]]}>
                {this.renderTime()}
                {this.renderTicks()}
              </View> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onPress=()=>{
    alert("pressed");
  }
}


const styles = {
  left: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: Color.leftBubbleBackground,
      marginRight: 60,
      minHeight: 20,
      justifyContent: 'flex-end',
    },
    containerToNext: {
      borderBottomLeftRadius: 3,
    },
    containerToPrevious: {
      borderTopLeftRadius: 3,
    },
  }),
  right: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: Color.defaultBlue,
      marginLeft: 60,
      minHeight: 20,
      justifyContent: 'flex-end',
    },
    containerToNext: {
      borderBottomRightRadius: 3,
    },
    containerToPrevious: {
      borderTopRightRadius: 3,
    },
  }),
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tick: {
    fontSize: 10,
    backgroundColor: Color.backgroundTransparent,
    color: Color.white,
  },
  tickView: {
    flexDirection: 'row',
    marginRight: 10,
  },
};