import React ,{ useState } from 'react';
import { StyleSheet, Text , FlatList , View , Alert , TouchableWithoutFeedback , Keyboard} from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
export default function App() {
// data
const [todos,setTodos] = useState([
  {text:'buy cheetos' , key:'1'},
  {text:'buy mango' , key:'2'},
  {text:'buy pizza' , key:'3'},
  {text:'buy shirts' , key:'4'},
  {text:'build react native app' , key:'5'},
])

  const pressHandler = (key) =>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  const submitHandler = (item) =>{
      if(item.length>4){
        setTodos(prevTodos=>{
          return [
            ...prevTodos,
            {text:item,key:Math.random().toString()}
          ]
        })
      }
      else{
      Alert.alert('Gone Wrong','Todo must be of 5+ charachters',[
        {text:'Got It!'}
      ])
      }
  }

  return (
  <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) =>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:40
  },
  list:{
    flex:1,
    margin:20
  },
});
