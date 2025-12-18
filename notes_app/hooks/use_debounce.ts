import { Note } from "@/note";
import { STOREGE_KEY } from "@/constants/app.constants";
import useAsyncStorage from "./use-storage";
const { getItems, setItems} = useAsyncStorage<Note>()

export async function debounce(note: Note, updated: Note) {
    const list = await getItems(STOREGE_KEY);
    if (!list) return;

    const newList = list.map((n) => (n.id === note.id ? updated : n));
    await setItems(STOREGE_KEY, newList);
}
