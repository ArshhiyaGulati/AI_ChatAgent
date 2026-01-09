import React, { useState, useRef } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';

const ChatInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { sendMessage, isLoading, addDocuments } = useChatContext();
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + ' KB',
      status: 'ready'
    }));
    addDocuments(newDocs);
  };

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end space-x-3">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <Paperclip size={20} className="text-gray-600" />
          </button>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Shift + Enter for new line)"
              className="w-full px-4 py-3 bg-transparent outline-none resize-none text-sm"
              rows="3"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Press Enter to send • Shift + Enter for new line
        </p>
      </div>
    </div>
  );
};

export default ChatInput;