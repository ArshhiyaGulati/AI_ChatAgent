import React from 'react';
import { Plus } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';

const EmptyState = () => {
  const { createNewChat } = useChatContext();

  return (
    <div className="flex flex-1 items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* AI Badge */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-semibold">
          AI
        </div>

        {/* Heading */}
        <h2 className="mb-2 text-xl font-semibold text-zinc-900">
          Welcome to AgentChat
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm text-zinc-500 leading-relaxed">
          Select an existing conversation or start a new one to begin chatting
          with your AI assistant.
        </p>

        {/* CTA */}
        <button
          onClick={createNewChat}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition"
        >
          <Plus size={16} />
          Start new chat
        </button>
      </div>
    </div>
  );
};

export default EmptyState;








