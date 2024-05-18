import Box from "@/components/ui/Box";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  

  function getAnswer(value: string) {
    try {
      const ans = eval(value);
      return ans;
    } catch (error) {
      return "...";
    }
  }

  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="dark" />
      <View style={styles.top}>
        <Text style={styles.text}>{value}</Text>
        <Text style={styles.answer}>{getAnswer(value)}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box value={value} setValue={setValue} text="C" operator />
          <Box value={value} setValue={setValue} text="%" operator />
          <Box value={value} setValue={setValue} text="#" cancel />
          <Box value={value} setValue={setValue} text="/" operator />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box value={value} setValue={setValue} text="7" />
          <Box value={value} setValue={setValue} text="8" />
          <Box value={value} setValue={setValue} text="9" />
          <Box value={value} setValue={setValue} text="*" operator />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box value={value} setValue={setValue} text="4" />
          <Box value={value} setValue={setValue} text="5" />
          <Box value={value} setValue={setValue} text="6" />
          <Box value={value} setValue={setValue} text="-" operator />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box value={value} setValue={setValue} text="1" />
          <Box value={value} setValue={setValue} text="2" />
          <Box value={value} setValue={setValue} text="3" />
          <Box value={value} setValue={setValue} text="+" operator />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box value={value} setValue={setValue} text="00" />
          <Box value={value} setValue={setValue} text="0" />
          <Box value={value} setValue={setValue} text="." />
          <Box value={value} setValue={setValue} text="=" operator />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    // borderWidth: 2,
    // borderColor: "white",
  },
  bottom: {
    flex: 3,
    backgroundColor: "#232423",
    padding: 10,
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: "white",
  },
  text: {
    color: "white",
    fontSize: 55,
    letterSpacing: 1,
  },
  answer: {
    color: "#9c9a9a",
    fontSize: 25,
  },
});
