/*
#Author: Firas.
#purpose: this component is responsible of the body of the app,
it has the flat list that make the todos from the array.
# 12/28/2019
*/
import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, AsyncStorage } from "react-native";
import TodoBar from "./ToDoBar";
import Todos from "./Todos";

export default Body = () => {
  const [todosArray, setTodo] = useState([]);
  const [todoInput, setTodoInput] = useState("");


  const deleteTodo = itemToDelete => {
    setTodo(todosArray.filter(todo => todo != itemToDelete));
  };
  const toggleDone = item => {
    let index = todosArray.findIndex(obj => obj === item);
    const newArr = [...todosArray];
    newArr[index].done = !newArr[index].done;
    setTodo(newArr);
    //console.log(item.done);
  };

  if (!todosArray.length) {
    return (
      <View style={styles.container}>

        <View style={styles.msgContainer}>
          <Text style={styles.noTodoMsg}>You have nothing to do :(</Text>
        </View>
        <TodoBar
          inputValue={todoInput}
          inputChange={setTodoInput}
          inputSubmit={() => {
            if (todoInput !== "") {
              setTodo(
                todosArray.concat({
                  id: todosArray.length,
                  value: todoInput,
                  done: false
                })
              );
            }

            setTodoInput("");
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>


      <FlatList
        data={todosArray}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Todos
                todo={item.value}
                isDone={item.done}
                done={() => toggleDone(item)}
                deleteTodo={() => {
                  deleteTodo(item);
                }}
              ></Todos>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString() + item.value + item.done}
      />
      <TodoBar
        inputValue={todoInput}
        inputChange={setTodoInput}
        inputSubmit={() => {
          //console.log(todoInput);
          if (todoInput !== "") {
            setTodo(
              todosArray.concat({
                id: todosArray.length,
                value: todoInput,
                done: false
              })
            );

            setTodoInput("");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    justifyContent: 'flex-end'
  },
  noTodoMsg: {
    fontWeight: "500",
    opacity: 0.3,
    fontSize: 18
  },
  msgContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.7
  }
});
