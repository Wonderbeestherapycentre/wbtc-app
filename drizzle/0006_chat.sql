-- Chat: one-to-one conversations between Parent / Therapist / Admin (see lib/chat.ts)
CREATE TABLE IF NOT EXISTS "chat_conversations" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_one_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "user_two_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "last_message_at" TIMESTAMP,
    "created_at" TIMESTAMP NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS "chat_conversations_pair_idx" ON "chat_conversations"("user_one_id", "user_two_id");

CREATE TABLE IF NOT EXISTS "chat_messages" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "conversation_id" UUID NOT NULL REFERENCES "chat_conversations"("id") ON DELETE CASCADE,
    "sender_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "body" TEXT NOT NULL,
    "read_at" TIMESTAMP,
    "created_at" TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "chat_messages_conversation_created_idx" ON "chat_messages"("conversation_id", "created_at");
