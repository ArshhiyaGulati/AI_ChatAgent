import { useState } from "react";
import { Pin, Trash2 } from "lucide-react";
import { useChatContext } from "../../context/ChatContext";

const ChatListItem = ({ chat, collapsed }) => {
  const [hovered, setHovered] = useState(false);
  const { activeChat, setActiveChat, deleteChat, togglePin } =
    useChatContext();

  //  safety Defensive guard (prevents crashes)
  if (!chat || !chat.id) return null;

  const isActive = activeChat?.id === chat.id;

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteChat(chat.id);
  };

  const handlePin = (e) => {
    e.stopPropagation();
    togglePin(chat.id);
  };

  return (
    <div
      onClick={() => setActiveChat(chat)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group flex items-center rounded-lg cursor-pointer transition",
        collapsed ? "justify-center px-2" : "px-3",
        "py-2",
        isActive ? "bg-indigo-50" : "hover:bg-zinc-100",
      ].join(" ")}
    >
      {/* TITLE */}
      {!collapsed && (
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {chat.pinned && (
              <Pin size={12} className="text-indigo-600 fill-current" />
            )}

            <span className="truncate text-sm font-medium text-zinc-800">
              {chat.title || "Untitled chat"}
            </span>
          </div>
        </div>
      )}

      {/* ACTIONS (shown on hover) */}
      {!collapsed && hovered && (
        <div className="ml-2 flex items-center gap-1">
          <button
            onClick={handlePin}
            className="rounded p-1.5 hover:bg-zinc-200 transition"
            title="Pin chat"
          >
            <Pin
              size={14}
              className={
                chat.pinned
                  ? "text-indigo-600 fill-current"
                  : "text-zinc-500"
              }
            />
          </button>

          <button
            onClick={handleDelete}
            className="rounded p-1.5 hover:bg-red-100 transition"
            title="Delete chat"
          >
            <Trash2 size={14} className="text-red-600" />
          </button>
        </div>
      )}

      {/* COLLAPSED INDICATOR */}
      {collapsed && (
        <span
          className={`h-2 w-2 rounded-full ${
            isActive ? "bg-indigo-600" : "bg-zinc-300"
          }`}
        />
      )}
    </div>
  );
};

export default ChatListItem;
