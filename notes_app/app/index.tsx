import { Note } from "@/note";
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useNotes from "@/hooks/use-notes";

export default function Index() {
  const { notes, createNote, loadNotes, deleteNote } = useNotes();
  const Notes = useNotes();
  useEffect(() => {
    loadNotes();
  });

  return (
    <View style={styles.container}>
      <FlatList 
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Link href={`/note/${item.item.id}`} style={styles.noteItem}>
            <View style={styles.noteCnt}>
              <Text numberOfLines={1} style={styles.noteText}>
                {item.item.text || "Новая заметка"}
              </Text>
              <TouchableOpacity onPress={() => deleteNote(item.item.id)}>
                <Entypo name="cross" size={24} color="black" style={styles.deleteBtnText}/>
              </TouchableOpacity>
            </View>
          </Link>
        )}
      />

      <TouchableOpacity onPress={createNote} style={styles.addBtn}>
        <Entypo name="add-to-list" size={24} color="black" style={styles.addBtnText}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  noteItem: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 10,
  },
  noteText: { fontSize: 16, width: "90%" },

  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  addBtnText: { color: "#fff", fontSize: 32, lineHeight: 32 },
  deleteBtnText: { color: "#f00", fontSize: 32, lineHeight: 32 },
  noteCnt: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
