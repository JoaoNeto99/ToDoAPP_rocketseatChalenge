import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
import { InputTask } from "../components/InputTask";
import { ToDoList } from "../components/ToDoList";

export type ToDoData = {
  text: string,
  isDone?: boolean
}

export function Home() {
  const [toDoList, setToDoList] = useState<ToDoData[]>([]);

  function addToDo(item: ToDoData) {
    setToDoList([...toDoList, item]);
  }

  function checkToDo(numberOfIndex: number) {
    const newState = toDoList.map((obj, index) => {
      if (index == numberOfIndex) {
        if (obj.isDone) {
          return { ...obj, isDone: false };
        }
        return { ...obj, isDone: true };
      }
      return obj;
    });

    setToDoList(newState);
  }

  function deleteToDo(numberOfIndex: number) {
    const newState = toDoList.filter((obj, index) => {
      if (index != numberOfIndex) return obj;
    });
    setToDoList(newState);
  }

  return (
    <View style={styles.container}>
      <Header lenght={toDoList.length} />
      <InputTask addToDo={addToDo} />
      <ToDoList toDoList={toDoList} checkToDo={checkToDo} deleteToDo={deleteToDo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    height: Dimensions.get("screen").height
  }
});
