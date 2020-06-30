import React ,{ useState } from 'react';
import { StyleSheet, Text , Button , View , TextInput } from 'react-native';

export default function AddTodo(props){

const [text,setText]=useState('')

  const changeHandler = val =>{
    setText(val)
  }

  return(
    <View>
      <TextInput
      style={styles.input}
      placeholder="add todo.."
      onChangeText={changeHandler}
      />
      <Button title='Add Todo' color='coral' onPress={()=>props.submitHandler(text)}/>
    </View>
  )
}

const styles = StyleSheet.create({
input:{
  marginBottom:10,
  paddingVertical:6,
  paddingHorizontal:8,
   borderBottomWidth:1,
   borderBottomColor:'#ddd'
}
});
