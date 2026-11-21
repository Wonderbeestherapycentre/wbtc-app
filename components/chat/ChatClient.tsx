"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Eye, Loader2, MessageCircle, Plus, Search, Send, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types (match lib/chat.ts responses)
// ---------------------------------------------------------------------------

type Role = "ADMIN" | "THERAPIST" | "PARENT";
type Person = { id: string; name: string; role: Role };

type ConversationItem = {
    id: string;
    participants: Person[];
    other: Person | null;
    title: string;
    isParticipant: boolean;
    lastMessage: { body: string; fromMe: boolean; senderName: string; createdAt: string } | null;
    lastMessageAt: string | null;
    unread: number;
};

type Message = {
    id: string;
    body: string;
    senderId: string;
    senderName: string;
    fromMe: boolean;
    createdAt: string;
    readAt: string | null;
};

type Thread = {
    conversation: Omit<ConversationItem, "lastMessage" | "lastMessageAt" | "unread">;
    canSend: boolean;
    sendDisabledReason: string | null;
    hasMore: boolean;
    messages: Message[];
};

type Contact = { id: string; name: string; role: Role; detail: string | null };

const LIST_POLL_MS = 20_000;
const THREAD_POLL_MS = 10_000;
const MAX_LENGTH = 2000;

async function api<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        ...init,
        headers: { "Content-Type": "application/json", ...init?.headers },
        cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || "Something went wrong.");
    return data as T;
}

const ROLE_STYLES: Record<Role, string> = {
    ADMIN: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    THERAPIST: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    PARENT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

function RoleBadge({ role }: { role: Role }) {
    // Parents are shown by their child's name, so no badge is needed.
    if (role === "PARENT") return null;
    return (
        <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide", ROLE_STYLES[role])}>
            {role.toLowerCase()}
        </span>
    );
}

function Avatar({ name, className }: { name: string; className?: string }) {
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
    return (
        <div className={cn("w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-sky-200 dark:from-amber-900/50 dark:to-sky-900/50 flex items-center justify-center text-sm font-bold text-blue-900 dark:text-amber-200 flex-shrink-0", className)}>
            {initials || "?"}
        </div>
    );
}

function listTime(iso: string) {
    const d = new Date(iso);
    const now = new Date();
    if (d.toDateString() === now.toDateString()) {
        return d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
    }
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

function dayHeading(iso: string) {
    const d = new Date(iso);
    const now = new Date();
    if (d.toDateString() === now.toDateString()) return "Today";
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function ChatClient({ role }: { role: Role }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selectedId = searchParams.get("c");
    const isAdmin = role === "ADMIN";
    const [scope, setScope] = useState<"mine" | "all">("mine");

    const [conversations, setConversations] = useState<ConversationItem[] | null>(null);
    const [listError, setListError] = useState<string | null>(null);
    const [showNew, setShowNew] = useState(false);

    const select = useCallback((id: string | null) => {
        router.replace(id ? `${pathname}?c=${id}` : pathname, { scroll: false });
    }, [router, pathname]);

    const loadList = useCallback(async () => {
        try {
            const data = await api<{ conversations: ConversationItem[] }>(`/api/chat/conversations?scope=${scope}`);
            setConversations(data.conversations);
            setListError(null);
        } catch (e) {
            setListError(e instanceof Error ? e.message : "Failed to load conversations.");
        }
    }, [scope]);

    const changeScope = (s: "mine" | "all") => {
        if (s === scope) return;
        setConversations(null);
        setScope(s);
    };

    useEffect(() => {
        // State is only set after the fetch resolves (polling an external source).
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadList();
        const t = setInterval(loadList, LIST_POLL_MS);
        return () => clearInterval(t);
    }, [loadList]);

    const openWith = async (contact: Contact) => {
        try {
            const { id } = await api<{ id: string }>("/api/chat/conversations", {
                method: "POST",
                body: JSON.stringify({ userId: contact.id }),
            });
            setShowNew(false);
            changeScope("mine");
            select(id);
        } catch (e) {
            toast.error(e instanceof Error ? e.message : "Couldn't start the conversation.");
        }
    };

    return (
        <div className="glass-card rounded-2xl overflow-hidden flex h-[calc(100vh-6.5rem)] min-h-[420px] animate-fade-in">
            {/* Conversation list */}
            <aside className={cn(
                "w-full md:w-80 lg:w-96 border-r border-gray-100 dark:border-neutral-800 flex flex-col",
                selectedId ? "hidden md:flex" : "flex",
            )}>
                <div className="p-3 border-b border-gray-100 dark:border-neutral-800 space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Messages</h2>
                        <button
                            onClick={() => setShowNew(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" /> New chat
                        </button>
                    </div>
                    {isAdmin && (
                        <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-lg p-1 text-sm">
                            {(["mine", "all"] as const).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => changeScope(s)}
                                    className={cn(
                                        "flex-1 px-3 py-1 rounded-md transition-colors",
                                        scope === s ? "bg-white dark:bg-neutral-700 shadow-sm font-medium" : "text-gray-500",
                                    )}
                                >
                                    {s === "mine" ? "My chats" : "All chats"}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex-1 overflow-y-auto">
                    {conversations === null ? (
                        listError ? (
                            <p className="p-6 text-sm text-center text-red-600">{listError}</p>
                        ) : (
                            <div className="p-6 flex justify-center"><Loader2 className="w-5 h-5 animate-spin text-amber-500" /></div>
                        )
                    ) : conversations.length === 0 ? (
                        <div className="p-8 text-center text-sm text-gray-500">
                            <MessageCircle className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                            {scope === "all" ? "No conversations yet." : "No messages yet. Start a new chat."}
                        </div>
                    ) : (
                        <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {conversations.map((c) => {
                                const person = c.other ?? c.participants[0];
                                return (
                                    <li key={c.id}>
                                        <button
                                            onClick={() => select(c.id)}
                                            className={cn(
                                                "w-full text-left flex items-start gap-3 px-3 py-3 transition-colors",
                                                selectedId === c.id ? "bg-amber-50 dark:bg-amber-900/10" : "hover:bg-gray-50 dark:hover:bg-neutral-800/40",
                                            )}
                                        >
                                            <Avatar name={person.name} />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className={cn("truncate text-sm text-gray-900 dark:text-white", c.unread > 0 ? "font-bold" : "font-medium")}>
                                                        {c.title}
                                                    </span>
                                                    {c.other && <RoleBadge role={c.other.role} />}
                                                    {c.lastMessageAt && (
                                                        <span className="ml-auto text-[11px] text-gray-400 whitespace-nowrap">{listTime(c.lastMessageAt)}</span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <p className={cn("text-xs truncate flex-1", c.unread > 0 ? "text-gray-800 dark:text-gray-200 font-medium" : "text-gray-500")}>
                                                        {c.lastMessage
                                                            ? `${c.lastMessage.fromMe ? "You" : c.isParticipant ? "" : c.lastMessage.senderName}${c.lastMessage.fromMe || !c.isParticipant ? ": " : ""}${c.lastMessage.body}`
                                                            : ""}
                                                    </p>
                                                    {c.unread > 0 && (
                                                        <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 rounded-full">
                                                            {c.unread > 99 ? "99+" : c.unread}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </aside>

            {/* Thread */}
            <section className={cn("flex-1 flex-col min-w-0", selectedId ? "flex" : "hidden md:flex")}>
                {selectedId ? (
                    <ThreadView key={selectedId} id={selectedId} onBack={() => select(null)} onChanged={loadList} />
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-500">
                        <MessageCircle className="w-12 h-12 mb-3 text-gray-300" />
                        <p className="font-medium text-gray-700 dark:text-gray-300">Select a conversation</p>
                        <p className="text-sm mt-1">Or start a new chat with {role === "PARENT" ? "your child's therapist or the admin" : role === "THERAPIST" ? "a parent or the admin" : "a parent or therapist"}.</p>
                    </div>
                )}
            </section>

            {showNew && <NewChatModal onClose={() => setShowNew(false)} onPick={openWith} />}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Thread
// ---------------------------------------------------------------------------

function ThreadView({ id, onBack, onChanged }: { id: string; onBack: () => void; onChanged: () => void }) {
    const [thread, setThread] = useState<Thread | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loadingOlder, setLoadingOlder] = useState(false);
    const [draft, setDraft] = useState("");
    const [sending, setSending] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const stickToBottom = useRef(true);
    const onChangedRef = useRef(onChanged);
    onChangedRef.current = onChanged;

    const scrollToBottom = () => {
        requestAnimationFrame(() => {
            const el = scrollRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        });
    };

    /** Loads the latest page and merges it with any older messages already loaded. */
    const loadLatest = useCallback(async (first = false) => {
        try {
            const data = await api<Thread>(`/api/chat/conversations/${id}`);
            setThread(data);
            setError(null);
            setMessages((prev) => {
                const oldestLatest = data.messages[0]?.createdAt;
                const older = oldestLatest ? prev.filter((m) => m.createdAt < oldestLatest) : [];
                const merged = [...older, ...data.messages];
                const changed = merged.length !== prev.length || merged[merged.length - 1]?.id !== prev[prev.length - 1]?.id;
                if (changed && (first || stickToBottom.current)) scrollToBottom();
                return merged;
            });
            if (first) {
                setHasMore(data.hasMore);
                onChangedRef.current(); // unread badges in the list
            }
        } catch (e) {
            if (first) setError(e instanceof Error ? e.message : "Failed to load messages.");
        }
    }, [id]);

    useEffect(() => {
        loadLatest(true);
        const t = setInterval(() => loadLatest(false), THREAD_POLL_MS);
        return () => clearInterval(t);
    }, [loadLatest]);

    const loadOlder = async () => {
        if (!messages.length || loadingOlder) return;
        setLoadingOlder(true);
        const el = scrollRef.current;
        const prevHeight = el?.scrollHeight ?? 0;
        try {
            const data = await api<Thread>(`/api/chat/conversations/${id}?before=${encodeURIComponent(messages[0].createdAt)}`);
            setMessages((prev) => [...data.messages, ...prev]);
            setHasMore(data.hasMore);
            requestAnimationFrame(() => {
                if (el) el.scrollTop = el.scrollHeight - prevHeight;
            });
        } catch (e) {
            toast.error(e instanceof Error ? e.message : "Failed to load older messages.");
        } finally {
            setLoadingOlder(false);
        }
    };

    const send = async () => {
        const body = draft.trim();
        if (!body || sending) return;
        setSending(true);
        try {
            const { message } = await api<{ message: Message }>(`/api/chat/conversations/${id}/messages`, {
                method: "POST",
                body: JSON.stringify({ body }),
            });
            setMessages((prev) => [...prev, message]);
            setDraft("");
            stickToBottom.current = true;
            scrollToBottom();
            onChangedRef.current();
        } catch (e) {
            toast.error(e instanceof Error ? e.message : "Message not sent.");
        } finally {
            setSending(false);
        }
    };

    const onScroll = () => {
        const el = scrollRef.current;
        if (el) stickToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    };

    if (error) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8">
                <p className="text-sm text-red-600">{error}</p>
                <button onClick={onBack} className="text-sm text-blue-600 hover:underline">Back to conversations</button>
            </div>
        );
    }
    if (!thread) {
        return <div className="flex-1 flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-amber-500" /></div>;
    }

    const { conversation } = thread;
    const header = conversation.other;

    return (
        <>
            <header className="flex items-center gap-3 px-3 py-2.5 border-b border-gray-100 dark:border-neutral-800">
                <button onClick={onBack} className="md:hidden p-1.5 -ml-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800" aria-label="Back">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <Avatar name={header?.name ?? conversation.participants[0].name} className="w-9 h-9" />
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white truncate">{conversation.title}</p>
                        {header && <RoleBadge role={header.role} />}
                    </div>
                    {!header && (
                        <p className="text-xs text-gray-500 truncate">
                            {conversation.participants.map((p) => (p.role === "PARENT" ? p.name : `${p.name} (${p.role.toLowerCase()})`)).join(" · ")}
                        </p>
                    )}
                </div>
            </header>

            <div ref={scrollRef} onScroll={onScroll} className="flex-1 overflow-y-auto px-3 md:px-6 py-4 space-y-1 bg-gray-50/40 dark:bg-neutral-950/40">
                {hasMore && (
                    <div className="flex justify-center pb-2">
                        <button onClick={loadOlder} disabled={loadingOlder} className="text-xs px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                            {loadingOlder ? "Loading…" : "Load older messages"}
                        </button>
                    </div>
                )}
                {messages.length === 0 && (
                    <p className="text-center text-sm text-gray-500 py-10">No messages yet. Say hello 👋</p>
                )}
                <MessageList messages={messages} viewerIsParticipant={conversation.isParticipant} leftId={conversation.participants[0].id} />
            </div>

            {thread.canSend ? (
                <form
                    onSubmit={(e) => { e.preventDefault(); send(); }}
                    className="border-t border-gray-100 dark:border-neutral-800 p-2 md:p-3 flex items-end gap-2"
                >
                    <textarea
                        value={draft}
                        onChange={(e) => setDraft(e.target.value.slice(0, MAX_LENGTH))}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                                e.preventDefault();
                                send();
                            }
                        }}
                        rows={1}
                        placeholder="Type a message…  (Enter to send, Shift+Enter for new line)"
                        className="flex-1 resize-none max-h-40 min-h-[42px] rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        style={{ height: Math.min(160, 42 + Math.max(0, draft.split("\n").length - 1) * 20) }}
                    />
                    <button
                        type="submit"
                        disabled={!draft.trim() || sending}
                        className="h-[42px] w-[42px] flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 transition-colors"
                        aria-label="Send"
                    >
                        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                </form>
            ) : (
                <div className="border-t border-gray-100 dark:border-neutral-800 px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
                    <Eye className="w-4 h-4" /> {thread.sendDisabledReason}
                </div>
            )}
        </>
    );
}

function MessageList({ messages, viewerIsParticipant, leftId }: { messages: Message[]; viewerIsParticipant: boolean; leftId: string }) {
    const items = useMemo(() => {
        const out: ({ type: "day"; label: string; key: string } | { type: "msg"; m: Message; showName: boolean })[] = [];
        let lastDay = "";
        let lastSender = "";
        for (const m of messages) {
            const day = new Date(m.createdAt).toDateString();
            if (day !== lastDay) {
                out.push({ type: "day", label: dayHeading(m.createdAt), key: `day-${day}` });
                lastDay = day;
                lastSender = "";
            }
            out.push({ type: "msg", m, showName: !viewerIsParticipant && m.senderId !== lastSender });
            lastSender = m.senderId;
        }
        return out;
    }, [messages, viewerIsParticipant]);

    return (
        <>
            {items.map((item) => {
                if (item.type === "day") {
                    return (
                        <div key={item.key} className="flex justify-center py-2">
                            <span className="text-[11px] font-medium text-gray-500 bg-white dark:bg-neutral-800 px-2.5 py-0.5 rounded-full border border-gray-100 dark:border-neutral-700">
                                {item.label}
                            </span>
                        </div>
                    );
                }
                const { m } = item;
                // For participants: own messages on the right. For admin viewing others: first participant left, second right.
                const right = viewerIsParticipant ? m.fromMe : m.senderId !== leftId;
                return (
                    <div key={m.id} className={cn("flex", right ? "justify-end" : "justify-start")}>
                        <div className={cn(
                            "max-w-[80%] md:max-w-[65%] rounded-2xl px-3 py-2 shadow-sm",
                            right
                                ? "bg-blue-600 text-white rounded-br-md"
                                : "bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-neutral-700 rounded-bl-md",
                        )}>
                            {item.showName && (
                                <p className={cn("text-[11px] font-semibold mb-0.5", right ? "text-blue-100" : "text-amber-600")}>{m.senderName}</p>
                            )}
                            <p className="text-sm whitespace-pre-wrap break-words">{m.body}</p>
                            <p className={cn("text-[10px] mt-1 text-right", right ? "text-blue-100" : "text-gray-400")}>
                                {new Date(m.createdAt).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
                                {viewerIsParticipant && m.fromMe && (m.readAt ? " · Seen" : " · Sent")}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

// ---------------------------------------------------------------------------
// New chat picker
// ---------------------------------------------------------------------------

function NewChatModal({ onClose, onPick }: { onClose: () => void; onPick: (c: Contact) => Promise<void> }) {
    const [contacts, setContacts] = useState<Contact[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [opening, setOpening] = useState<string | null>(null);

    useEffect(() => {
        api<{ contacts: Contact[] }>("/api/chat/contacts")
            .then((d) => setContacts(d.contacts))
            .catch((e) => setError(e instanceof Error ? e.message : "Failed to load contacts."));
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!contacts) return [];
        if (!q) return contacts;
        return contacts.filter((c) => c.name.toLowerCase().includes(q) || c.detail?.toLowerCase().includes(q));
    }, [contacts, query]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-neutral-800">
                    <h3 className="font-bold text-gray-900 dark:text-white">New chat</h3>
                    <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800" aria-label="Close">
                        <X className="w-4 h-4" />
                    </button>
                </div>
                <div className="p-3">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            autoFocus
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by name or child…"
                            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto pb-2">
                    {error ? (
                        <p className="p-6 text-sm text-center text-red-600">{error}</p>
                    ) : !contacts ? (
                        <div className="p-6 flex justify-center"><Loader2 className="w-5 h-5 animate-spin text-amber-500" /></div>
                    ) : filtered.length === 0 ? (
                        <p className="p-6 text-sm text-center text-gray-500">
                            {contacts.length === 0 ? "There is no one you can message yet." : "No matches."}
                        </p>
                    ) : (
                        <ul>
                            {filtered.map((c) => (
                                <li key={c.id}>
                                    <button
                                        disabled={!!opening}
                                        onClick={async () => { setOpening(c.id); await onPick(c); setOpening(null); }}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 dark:hover:bg-neutral-800/50 disabled:opacity-60"
                                    >
                                        <Avatar name={c.name} className="w-9 h-9" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-900 dark:text-white truncate">{c.name}</span>
                                                <RoleBadge role={c.role} />
                                            </div>
                                            {c.detail && <p className="text-xs text-gray-500 truncate">{c.detail}</p>}
                                        </div>
                                        {opening === c.id && <Loader2 className="w-4 h-4 animate-spin text-amber-500" />}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
