import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import { ToDoData } from "../pages/Home";

interface ItemToDoProps extends ToDoData {
  index: number;
  checkToDo: (index: number) => void;
  deleteToDo: (index: number) => void;

}

export function ItemToDo({ text, index, isDone, checkToDo, deleteToDo }: ItemToDoProps) {

  function handleClick() {
    checkToDo(index);
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={index % 2 == 0
        ? ["rgba(196, 196, 196, 0.24)", "rgba(196, 196, 196, 0)"]
        : ["rgba(196, 196, 196, 0)", "rgba(196, 196, 196, 0)"]}>

      <TouchableOpacity style={styles.line}>
        <TouchableOpacity style={styles.box_one} onPress={handleClick}>
          {
            !isDone ?
              (
                <>
                  <Icon name="square" size={24} color={"#B2B2B2"} />
                  <Text style={styles.toDoName}>{text}</Text>
                </>
              )
              : (
                <>
                  <Icon name="check-square" size={24} color={"#1DB863"} />
                  <Text style={[styles.toDoName, { color: "#1DB863", textDecorationLine: "line-through" }]}>{text}</Text>
                </>
              )
          }
        </TouchableOpacity>
        <Icon name="trash-2" style={styles.buttonDelete} size={24} color="#B2B2B2" onPress={() => deleteToDo(index)} />
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    paddingVertical: 10,
    backgroundColor: "#C4C4C4"
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20
  },
  box_one: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingVertical: 10
  },
  isDone: {
    color: "#1DB863",
    textDecorationLine: "line-through"
  },
  toDoName: {
    marginLeft: 10
  },
  buttonDelete: {
    padding: 10
  }
});
