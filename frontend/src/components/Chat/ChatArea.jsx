import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-zinc-50 dark:bg-zinc-900">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatArea;
