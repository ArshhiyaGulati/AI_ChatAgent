import { useState } from "react";
import { useChatContext } from "../../context/ChatContext";
import DocumentTags from "./DocumentTags";

const ChatHeader = () => {
  const { activeChat, documents, renameChat } = useChatContext();
  const [title, setTitle] = useState(activeChat?.title || "");

  if (!activeChat) return null;

  const isNewChat =
    activeChat.messages.length === 0 &&
    activeChat.title.toLowerCase().includes("new");

  const handleBlur = () => {
    if (isNewChat && title !== activeChat.title) {
      renameChat(activeChat.id, title);
    }
  };

  return (
    <div className="border-b border-zinc-200 bg-white px-6 py-4">
      {isNewChat ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          placeholder="Name this conversation…"
          className="w-full max-w-md bg-transparent text-lg font-semibold text-zinc-900 outline-none placeholder:text-zinc-400"
          autoFocus
        />
      ) : (
        <h2 className="text-lg font-semibold text-zinc-900">
          {activeChat.title}
        </h2>
      )}

      <p className="mt-1 text-xs text-zinc-500">
        AI-powered conversation assistant
      </p>

      {documents.length > 0 && <DocumentTags />}
    </div>
  );
};

export default ChatHeader;
