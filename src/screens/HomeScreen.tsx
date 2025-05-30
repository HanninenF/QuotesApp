import { View, StyleSheet, Text } from "react-native";
import AppPressable from "../components/ui/AppPressable";
import AppText from "../components/ui/AppText";
import { colors } from "../styles/colors";
import { useContext } from "react";
import { quotesContext } from "../contexts/quotesContext";
import AddQuoteForm from "../components/AddQuoteForm";
import { fontSize, spacing } from "../styles/globalsStyles";

export default function HomeScreen() {
  const { quotes, quotesIndex, setQuotesIndex } = useContext(quotesContext);

  const handleNext = () => {
    if (quotesIndex < quotes.length - 1) {
      setQuotesIndex(quotesIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (quotesIndex > 0) {
      setQuotesIndex(quotesIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Välkommen till din app</AppText>
      <AppText> {quotes[quotesIndex].text}</AppText>
      <AppText> {quotes[quotesIndex].author}</AppText>
      <View style={styles.buttonContainer}>
        <AppPressable onPress={handlePrevious}>
          <AppText>Previous</AppText>
        </AppPressable>
        <AppPressable onPress={handleNext}>
          <AppText>Next</AppText>
        </AppPressable>
      </View>

      {/* form */}
      <AddQuoteForm />
      {/*     <AppPressable onPress={handlePress}>
        <AppText>Tryck Här</AppText>
      </AppPressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.large,
  },
  title: {
    fontSize: fontSize.Xxxl,
    marginBottom: spacing.Xxl,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
