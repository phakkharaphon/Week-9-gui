import React, { Component } from 'react';
import {View,Text} from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      text:"Rect native in thailand"
    }
  }
    render(){
        return(
            <View>
                <Text style={{fontSize:20}}>{this.state.text}</Text>
                <Text style={{color:"red"}}>Hello. I have a Book</Text>
            </View>
        )
    }
}

export default App;