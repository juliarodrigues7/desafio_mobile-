import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import quotesData from "./data/quotes.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  function handleMotivationalRefresh() {}
  function handleReligiousRefresh() {}

  return (
    <View style={styles.container}>
      <Header />
      <Footer
        onRefreshMotivational={handleMotivationalRefresh}
        onRefreshReligious={handleReligiousRefresh}
      />
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
