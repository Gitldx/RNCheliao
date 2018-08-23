import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Animated , TouchableOpacity} from 'react-native';

import Color from '../data/Colors'


export default class StationNotifier extends Component{

    constructor(props){
        super(props);
        this.state = {
            fadeoutAnimate : new Animated.Value(0.8)
        }
    }

    componentDidMount(){
        Animated.timing(                  
            this.state.fadeoutAnimate,            
            {
              toValue: 0.2,                   
              duration: 5000,              
            }
          ).start(()=>{this.props.onFadeOut()}); 
    }

    render(){
        const {fadeoutAnimate} = this.state
        return (
            <Animated.View style={[styles.container,{opacity: fadeoutAnimate}]}>
                <TouchableOpacity onPress={()=>this.props.onPress()}>
                <Text style = {styles.text}>站</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex :1,
        flexDirection: 'row',
        backgroundColor : 'black',
        borderRadius: 15,
        position:'absolute',
        bottom : 15,
        alignSelf:'center',
        paddingLeft: 50,
        paddingRight:50,
        paddingTop : 5,
        paddingBottom : 5
    },
    text :{
        color : 'white'
    }

})