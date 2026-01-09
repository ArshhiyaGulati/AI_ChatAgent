import React from 'react';
import { Plus } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';
import DocumentTags from './DocumentTags';

const ChatHeader = () => {
  const { activeChat, createNewChat, documents } = useChatContext();

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{activeChat.title}</h2>
          <p className="text-xs text-gray-500">AI-powered conversation assistant</p>
        </div>
        <button
          onClick={createNewChat}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Plus size={20} className="text-gray-600" />
        </button>
      </div>
      
      {documents.length > 0 && <DocumentTags />}
    </div>
  );
};

export default ChatHeader;