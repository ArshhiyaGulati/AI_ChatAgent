import React from 'react';
import { Plus } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';
import SidebarHeader from './SidebarHeader';
import ChatList from './ChatList';

const Sidebar = () => {
  const { sidebarCollapsed, setSidebarCollapsed, createNewChat } = useChatContext();

    return (
    <aside
      className={[
        "flex flex-col border-r border-zinc-200 bg-white transition-all duration-300",
        sidebarCollapsed ? "w-16" : "w-72",
      ].join(" ")}
    >
      {/* Header */}
      <SidebarHeader
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* New Chat Button */}
      <div className="p-3">
        <button
          onClick={createNewChat}
          className={[
            "flex w-full items-center rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition",
            sidebarCollapsed ? "justify-center" : "gap-2",
          ].join(" ")}
        >
          <Plus size={18} />
          {!sidebarCollapsed && <span>New chat</span>}
        </button>
      </div>

      {/* Chat List */}
      <ChatList collapsed={sidebarCollapsed} />
    </aside>
  );
};

export default Sidebar;