import { StyleSheet, Text, View } from "react-native";
import Button from "../Button/Button";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
}

type TodoItemProps = {
  item: Todo;
  onToggle: (id: string) => void; // Функция переключения задачи
  onDelete: (id: string) => void; // Функции удаления задачи
}

export default function TodoItem({ item, onToggle, onDelete }: TodoItemProps) {
// Стили
    return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          item.completed && styles.textCompleted
        ]}
      >{ item.text }</Text>

      <View style={styles.bntContainer}>
        <Button
          onPress={() => onToggle(item.id)}
          style={styles.btn}
        >
          {item.completed ?
            (<Text>Undone</Text>) :
            (<Text>Done</Text>)
          }
        </Button>

        <Button
          onPress={() => onDelete(item.id)}
          style={styles.btn}
        >
          <Text>Del</Text>
        </Button>
      </View>
    </View>
  )
}

// Стили
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 6,
    elevation: 2,
    shadowColor: "#0002",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  bntContainer: {
    flexDirection: "row",
    gap: 10
  },

  btn: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "transparent",
  },

  text: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },

  textCompleted: {
    textDecorationLine: "line-through",
    color: "#888",
  }
});