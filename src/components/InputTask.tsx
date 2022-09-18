import React, { useState } from "react";
import { StyleSheet, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { ToDoData } from "../pages/Home";

interface InputTaskProps {
  addToDo: (item: ToDoData) => void;
}

export function InputTask({ addToDo }: InputTaskProps) {
  const [toDoItem, setToDoItem] = useState<ToDoData>({ text: "", isDone: false });

  function handleInput() {
    if (toDoItem.text != "") {
      addToDo(toDoItem);
      setToDoItem({ text: "", isDone: false });
      return;
    }
    ToastAndroid.show("Por favor, preencha o campo", ToastAndroid.LONG);

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Adicione nova tarefa"}
        onChangeText={(e) => setToDoItem({ text: e })}
        clearButtonMode={"always"}
        value={toDoItem.text}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleInput}>
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: -28,
    backgroundColor: "#FFF",
    marginHorizontal: 24,
    borderRadius: 5
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: "#EBEBEB",
    color: "#666666",
    shadowColor: "#000000",
    shadowRadius: 10,
    alignSelf: "center"
  },
  addButton: {
    backgroundColor: "#FFF",
    height: 56,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});
