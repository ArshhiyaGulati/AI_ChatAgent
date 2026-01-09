import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ChatArea from '../Chat/ChatArea';
import EmptyState from '../EmptyState/Emptystate';
import { useChatContext } from '../../context/ChatContext';

const Layout = () => {
  const { activeChat } = useChatContext();

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      {activeChat ? <ChatArea /> : <EmptyState />}
    </div>
  );
};

export default Layout;