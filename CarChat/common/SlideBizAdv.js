
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Animated , TouchableOpacity} from 'react-native';



export default class SlideBizAdv extends Component {

    offsetX = 145;

    in = false;

    constructor(props){
        super(props);
        this.state = {
            xAnimation : new Animated.Value(this.offsetX)
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.slideIn()
        },3000)
    }

    render(){
        return(
            <Animated.View style={[styles.container,{transform : [{translateX : this.state.xAnimation}]}]}>
                <TouchableOpacity onPress={this.toggle}>
                    <View style = {styles.view}>
                        <Text style = {styles.text}>沿线商家广告</Text>
                        <Text style = {styles.text}>沿线商家广告</Text>
                    </View>
                </TouchableOpacity>
                
            </Animated.View>
        )
    }

    slideIn = ()=>{
        Animated.spring(this.state.xAnimation, {
            toValue: 0,
          }).start(()=>{
            setTimeout(()=>{
                this.slideOut()
            },3000)
          });
        
        this.in = true;
    }

    slideOut = ()=>{
        Animated.spring(this.state.xAnimation, {
            toValue: this.offsetX,
          }).start();

        this.in = false;
    }

    toggle = ()=>{
        
        if(this.in == true){
            this.slideOut();
        }
        else{
            this.slideIn();
        }
    }
}




const styles = StyleSheet.create({
    container:{
        flex :1,
        height : 80,
        width: 150,
        backgroundColor : 'white',
        borderRadius: 15,
        position:'absolute',
        right : 0,
        opacity : 0.8,
        flexDirection:'column',
        justifyContent : 'center'
    },
    text :{
        color : 'black'
    },
    view : {
        height : 80,
        borderRadius: 15,
        flexDirection:'column',
        // alignSelf : "center",
        // alignItems : 'flex-start',
        
    }
})