import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';

const AIMessage = ({ message }) => {
  const { toggleSection } = useChatContext();

  return (
    <div className="flex justify-start mb-6">
      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-4 max-w-3xl shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">AI</span>
          </div>
          <span className="ml-2 text-xs text-gray-500">Agent Response</span>
        </div>
        
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">{message.content.summary}</p>
        
        {message.content.sections.map((section, idx) => (
          <div key={idx} className="mb-3 border-l-2 border-indigo-200 pl-3">
            <button
              onClick={() => toggleSection(message.id, idx)}
              className="flex items-center justify-between w-full text-left mb-2 hover:bg-gray-50 p-2 rounded transition-colors"
            >
              <span className="font-semibold text-sm text-gray-800">{section.title}</span>
              {section.collapsed ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronUp size={16} className="text-gray-400" />}
            </button>
            {!section.collapsed && (
              <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed pl-2">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMessage;