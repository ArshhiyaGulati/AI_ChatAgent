import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import ChatListItem from './ChatListItem';

const ChatList = ({ collapsed }) => {
  const { chats } = useChatContext();

  return (
    <div className="flex-1 overflow-y-auto px-2">
      {!collapsed && (
        <div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
          Recent chats
        </div>
      )}

      <div className="space-y-1">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;