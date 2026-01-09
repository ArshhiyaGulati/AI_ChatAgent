import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SidebarHeader = ({ collapsed, onToggle }) => {
 return (
    <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
      {!collapsed && (
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-semibold">
            AI
          </div>
          <span className="text-sm font-semibold text-zinc-900">
            AgentChat
          </span>
        </div>
      )}

      <button
        onClick={onToggle}
        className="rounded-lg p-2 hover:bg-zinc-100 transition"
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronRight size={18} />
        ) : (
          <ChevronLeft size={18} />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;