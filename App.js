import React from 'react';
import {View,Text,image} from 'react-native';

const tBanana= (props) => {
  return(
    <View style={{alignItems:"center"}}>
      <Text>Type{props.name}</Text>
    </View>
  )
}

const Banana=()=>{
let pic={
  uri:'https://png.pngtree.com/png-clipart/20190520/original/pngtree-cartoon-fruit-cute-banana-image-png-image_4062346.jpg',
}
  return(
    <View style={{backgroundColor:"Yellow",alignItems:"center"}}>
      <image 
      style={{width:250,height:250,marginTop:20}}
      source={pic}/>
      <Text>Hello, I am a Banana</Text>
      <tBanana name="1. Cavendish Banana" />
    </View>
  )
}
export default Banana;