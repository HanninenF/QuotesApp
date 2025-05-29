import { TextProps, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default function AppText(props: TextProps) {
  return <Text {...props} style={[styles.text, props.style]} />;
}
const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 16,
  },
});
