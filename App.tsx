import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import quotesData from "./data/quotes.json";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const motivationalQuotes = quotesData.quotes.filter(
  (q) => q.category !== "religious"
);
const religiousQuotes = quotesData.quotes.filter(
  (q) => q.category === "religious"
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
