import { View, StyleSheet, Text } from "react-native";
import AppPressable from "../components/ui/AppPressable";
import AppText from "../components/ui/AppText";
import { colors } from "../styles/colors";

export default function HomeScreen() {
  const handlePress = () => {
    alert("knappen klickades!");
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Välkommen till din app</AppText>
      <AppPressable onPress={handlePress}>
        <AppText>Tryck Här</AppText>
      </AppPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
  },
});
