import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AppPressable from "../components/ui/AppPressable";
import AppText from "../components/ui/AppText";
import { colors } from "../styles/colors";
import { useContext } from "react";
import { quotesContext } from "../contexts/quotesContext";
import AddQuoteForm from "../components/AddQuoteForm";
import { fontSize, spacing } from "../styles/globalsStyles";
import { useRef, useEffect } from "react";

export default function HomeScreen() {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        // Scrolla max uppåt (exempel: scrolla till 100 pixlar)
        scrollViewRef.current?.scrollTo({ y: 300, animated: true });
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // Scrolla tillbaka till toppen när tangentbordet stängs
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <AppText style={styles.title}>Välkommen till din app</AppText>
          <AppText>{quotes[quotesIndex].text}</AppText>
          <AppText>{quotes[quotesIndex].author}</AppText>
          <View style={styles.buttonContainer}>
            <AppPressable onPress={handlePrevious}>
              <AppText>Previous</AppText>
            </AppPressable>
            <AppPressable onPress={handleNext}>
              <AppText>Next</AppText>
            </AppPressable>
          </View>
          <AddQuoteForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: spacing.large,
  },
  title: {
    marginTop: spacing.smallGreat,
    fontSize: fontSize.Xxxl,
    marginBottom: spacing.Xxl,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
