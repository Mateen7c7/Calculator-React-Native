import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  text: string;
  operator?: boolean;
  value?: string;
  setValue: (val: string) => void;
  cancel?: boolean;
}
export default function Box({
  text,
  operator = false,
  setValue,
  value,
  cancel,
}: Props) {
  function handleChange() {
    if (text === "C") {
      setValue("");
      //   console.log("clear");
    } else if (text === "#") {
      setValue(value!.slice(0, -1));
    } else if (text === "=") {
      setValue(eval(value!).toString());
    } else {
      //   console.log(text);
      //   console.log(" Not clear");
      setValue(value + text);
    }
  }
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={styles.container}
      onPress={handleChange}
    >
      {cancel ? (
        <MaterialIcons name="cancel" size={35} color="#13cbf0" />
      ) : (
        <Text style={[styles.text, operator && styles.operator]}>{text}</Text>
      )}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232423",
  },
  text: {
    color: "white",
    fontSize: 35,
  },
  operator: {
    color: "#13cbf0",
  },
});
