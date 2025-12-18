import { Todo } from "@/components/TodoItem/TodoItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react"

const STORAGE_KEY = "todos"; // Ключ

export default function useTodos() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY); // Получение данных
        if (json) setTodos(JSON.parse(json));
      } catch (e) {
        console.log("Ошибка загрузки задач:", e);
      }
    })();
  }, []);

  // Сохранение задач
  const saveTodos = async (newTodos: Todo[]) => {
    setTodos(newTodos);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos)); // Сохранение данных
    } catch (e) {
      console.log("Ошибка сохранения задач:", e);
    }
  };

  // Добавить задачу
  const addTodo = (text: string) => {
    if (!text.trim()) return; // Проверка на пустой ввод
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    saveTodos([...todos, newTodo]);
  };

  // Удалить задачу
  const deleteTodo = (id: string) => {
    saveTodos(todos.filter(t => t.id !== id));
  };

  // Переключить выполнение
  const toggleTodo = (id: string) => {
    saveTodos(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Очистить выполненные
  const clearCompleted = () => {
    saveTodos(todos.filter(t => !t.completed));
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted
  }
}

