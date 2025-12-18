import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TodoItem from "@/components/TodoItem/TodoItem";
import useTodos from "@/hooks/use-todos";
import { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Index() {
  const { todos, addTodo, deleteTodo, toggleTodo, clearCompleted } = useTodos();
  const [text, setText] = useState<string>("");

  return (
    
    // Основной контейнер с возможностью прокрутки.
    <ScrollView contentContainerStyle={styles.container}> // Стиль для контейнера
      <Text style={styles.title}>Мои задачи</Text> // Заголовок

      <View style={styles.inputContainer}> // Контейнер для ввода новой задачи
        <Input 
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        <Button
          onPress={() => addTodo(text)}
        >
          <Text style={styles.text}>Add</Text>
        </Button>
      </View>

      <View>
        {todos.map(item => (
          <TodoItem 
            key={item.id}
            onDelete={() => deleteTodo(item.id)} // Функция удаления задачи
            onToggle={() => toggleTodo(item.id)} // Функция переключения выполнения задачи
            item={item}
          />
        ))}
      </View>
      <Button // Кнопка для удаления задач
        onPress={clearCompleted}
        type="danger"
      >
        <Text style={styles.btnDelete}>Delete all</Text>
      </Button>

    </ScrollView>
  )
}

// Стили
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  container: {
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginRight: 16,
  },
  btnDelete: {
    color: "#fff",
  }
})