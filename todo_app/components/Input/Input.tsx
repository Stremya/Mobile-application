import { StyleSheet, TextInput, TextStyle } from "react-native";

type InputProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: TextStyle;
  onSubmitEditing?: () => void;
}

// Ввод текств
export default function Input({
  value,
  onChangeText,
  placeholder = "Введите текст",
  style,
  onSubmitEditing
}: InputProps) {
  return (
    <TextInput 
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[style, styles.base]}
      onSubmitEditing={onSubmitEditing}
    />
  )
}

// Стили
const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 2,
    borderColor: "#222",
    fontSize: 16,
    color: "#222",
  }
});
