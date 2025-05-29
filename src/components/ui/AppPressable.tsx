import {
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { colors } from "../../styles/colors";
import React, { ReactNode } from "react";

type Props = PressableProps & {
  children: ReactNode;
};

export default function AppPressable({ children, style, ...rest }: Props) {
  const combinedStyle = (state: { pressed: boolean }): StyleProp<ViewStyle> => {
    const baseStyle = styles.pressable;

    if (typeof style === "function") {
      const dynamicStyle = style(state);
      return [baseStyle, dynamicStyle];
    }

    return [baseStyle, style];
  };

  return (
    <Pressable {...rest} style={combinedStyle}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: colors.button,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});
