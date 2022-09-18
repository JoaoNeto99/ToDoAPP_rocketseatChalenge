import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ItemToDo } from "./ItemToDo";
import { ToDoData } from "../pages/Home";

interface TodoListProps {
  toDoList: ToDoData[];
  checkToDo: (index: number) => void;
  deleteToDo: (index: number) => void;
}

export function ToDoList({ toDoList, checkToDo, deleteToDo }: TodoListProps) {
  return (
    <FlatList
      data={toDoList}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <ItemToDo text={item.text} isDone={item.isDone} checkToDo={checkToDo} index={index} deleteToDo={deleteToDo} />
      )}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});

