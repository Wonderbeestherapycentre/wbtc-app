"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered } from "lucide-react";

interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    error?: boolean;
}

export default function RichTextEditor({ value, onChange, error }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        immediatelyRender: false,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                class: "min-h-[150px] px-4 py-3 focus:outline-none text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-1",
            },
        },
    });

    if (!editor) return null;

    const toolbarBtn = (active: boolean) =>
        `p-1.5 rounded-lg transition-colors ${active
            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            : "hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-500"
        }`;

    return (
        <div className={`rounded-xl border ${error ? "border-red-500" : "border-gray-200 dark:border-neutral-700"} bg-gray-50 dark:bg-neutral-800 overflow-hidden`}>
            <div className="flex items-center gap-1 border-b border-gray-200 dark:border-neutral-700 px-2 py-1.5 bg-white/50 dark:bg-neutral-900/50">
                <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={toolbarBtn(editor.isActive("bold"))}>
                    <Bold className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={toolbarBtn(editor.isActive("italic"))}>
                    <Italic className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={toolbarBtn(editor.isActive("bulletList"))}>
                    <List className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={toolbarBtn(editor.isActive("orderedList"))}>
                    <ListOrdered className="w-4 h-4" />
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
}
