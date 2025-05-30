import { TextProps, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { spacing } from "../../styles/globalsStyles";

export default function AppText(props: TextProps) {
  return <Text {...props} style={[styles.text, props.style]} />;
}
const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: spacing.large,
    marginBottom: spacing.small,
  },
});
