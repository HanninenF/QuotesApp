import { useContext, useState } from "react";
import { QuotesType } from "../types/quotesTypes";
import { quotesContext } from "../contexts/quotesContext";
import uuid from "react-native-uuid";
import { TextInput, View, StyleSheet } from "react-native";
import AppPressable from "./ui/AppPressable";
import AppText from "./ui/AppText";
import { spacing } from "../styles/globalsStyles";
import { colors } from "../styles/colors";

export default function AddQuoteForm() {
  const [newQuote, setNewQuote] = useState<Omit<QuotesType, "id">>({
    text: "",
    author: "",
  });

  const { quotes, setQuotes } = useContext(quotesContext);

  const handleAddQuote = () => {
    if (newQuote.text.trim() && newQuote.author.trim()) {
      const quoteWithId = {
        ...newQuote,
        id: uuid.v4().toString(),
      };
      setQuotes([...quotes, quoteWithId]);
      setNewQuote({ text: "", author: "" });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="quote"
        value={newQuote.text}
        onChangeText={(text) => setNewQuote((prev) => ({ ...prev, text }))}
        style={styles.input}
      />
      <TextInput
        placeholder="author"
        value={newQuote.author}
        onChangeText={(author) => setNewQuote((prev) => ({ ...prev, author }))}
        style={styles.input}
      />
      <AppPressable onPress={handleAddQuote}>
        <AppText>Add</AppText>
      </AppPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: spacing.large,
    gap: spacing.medium,
  },
  input: {
    marginTop: spacing.large,
    minWidth: spacing.great,
    backgroundColor: colors.text,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: spacing.xs,
    padding: spacing.sMedium,
  },
});
