import { create } from "zustand";
import { type Editor } from "@tiptap/react";

interface EditorState {
    editor: Editor | null;
    setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
    editor: null,
    setEditor: (editor) => {
        // Only update the state if the editor instance has changed
        if (get().editor !== editor) {
            set({ editor });
        }
    },
}))