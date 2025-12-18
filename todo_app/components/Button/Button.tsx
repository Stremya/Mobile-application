import { ReactNode } from "react";
import { Pressable, ViewStyle, StyleSheet } from "react-native";

type ButtonProps = {
  children: ReactNode;
  onPress: () => void; // Функция нажатия на кнопку
  style?: ViewStyle;
  type?: "primary" | "secondary" | "danger";
}

export default function Button({ children, onPress, style, type = "primary" }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[type],
        style,
        pressed && styles.pressed
      ]}
    >
      {children}
    </Pressable>
  )
}

// Стили кнопок
const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  // Варианты стиля кнопок:
  primary: {
    backgroundColor: "#4e8cff",
  },
  secondary: {
    backgroundColor: "#777",
  },
  danger: {
    backgroundColor: "#ff6363",
  },
});