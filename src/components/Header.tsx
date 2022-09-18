import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  lenght: number;
}

export function Header({ lenght }: HeaderProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.name}>to.do</Text>
          <Text style={styles.subtitle}>Você tem <Text style={styles.subtitleBold}>{lenght} tarefas</Text></Text>
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: "#8257E5"
  },
  innerContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    color: "#FFF",
    fontSize: 34,
    fontFamily: "Roboto-Black"
  },
  subtitle: {
    color: "#FFF",
    alignSelf: "center"
  },
  subtitleBold: {
    fontWeight: "bold"
  }
});
