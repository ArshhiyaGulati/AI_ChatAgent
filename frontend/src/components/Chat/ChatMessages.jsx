
import React, { useRef, useEffect } from 'react';
import { useChatContext } from '../../context/ChatContext';
import UserMessage from './UserMessage';
import AIMessages from './AIMessages';
import LoadingIndicator from './LoadingIndicator';

const ChatMessages = () => {
  const { activeChat, isLoading } = useChatContext();
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages]);

  if (!activeChat.messages.length) {
    return (
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AI</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Start a conversation</h3>
            <p className="text-gray-500">Ask me anything or upload documents for context-aware responses</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      {activeChat.messages.map(msg => (
        msg.type === 'user' ? 
          <UserMessage key={msg.id} message={msg} /> : 
          <AIMessage key={msg.id} message={msg} />
      ))}
      {isLoading && <LoadingIndicator />}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatMessages;