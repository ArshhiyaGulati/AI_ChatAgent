import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [chats, setChats] = useState([
    { id: 1, title: 'Product Strategy Discussion', pinned: true, messages: [], timestamp: Date.now() - 3600000 },
    { id: 2, title: 'Data Analysis Query', pinned: false, messages: [], timestamp: Date.now() - 7200000 },
    { id: 3, title: 'Market Research Insights', pinned: false, messages: [], timestamp: Date.now() - 86400000 }
  ]);
  const [activeChat, setActiveChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState([]);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: 'New Conversation',
      pinned: false,
      messages: [],
      timestamp: Date.now()
    };
    setChats([newChat, ...chats]);
    setActiveChat(newChat);
    setDocuments([]);
  };

  const deleteChat = (chatId) => {
    setChats(chats.filter(c => c.id !== chatId));
    if (activeChat?.id === chatId) {
      setActiveChat(null);
    }
  };

  const togglePin = (chatId) => {
    setChats(chats.map(c => 
      c.id === chatId ? { ...c, pinned: !c.pinned } : c
    ).sort((a, b) => b.pinned - a.pinned || b.timestamp - a.timestamp));
  };

  const sendMessage = async (content) => {
    if (!content.trim() || isLoading || !activeChat) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: content,
      timestamp: Date.now()
    };

    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, userMessage],
      title: activeChat.messages.length === 0 ? content.slice(0, 30) + '...' : activeChat.title
    };

    setChats(chats.map(c => c.id === updatedChat.id ? updatedChat : c));
    setActiveChat(updatedChat);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateMockResponse(content),
        timestamp: Date.now()
      };

      const finalChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, aiMessage]
      };

      setChats(chats.map(c => c.id === finalChat.id ? finalChat : c));
      setActiveChat(finalChat);
      setIsLoading(false);
    }, 1500);
  };

  const generateMockResponse = (query) => {
    return {
      summary: "Based on your query, I've analyzed the relevant data and compiled insights.",
      sections: [
        {
          title: "Key Findings",
          content: "• The data shows a 23% increase in user engagement\n• Customer satisfaction scores improved by 15%\n• Response time decreased by 40%",
          collapsed: false
        },
        {
          title: "Detailed Analysis",
          content: "The performance metrics indicate strong growth across multiple dimensions. User engagement has seen significant improvement, particularly in mobile platforms where we observed a 31% increase in daily active users.\n\nCustomer feedback has been overwhelmingly positive, with NPS scores rising from 42 to 58 over the past quarter.",
          collapsed: false
        },
        {
          title: "Recommendations",
          content: "1. Continue current optimization strategies\n2. Expand mobile-first initiatives\n3. Increase investment in customer support infrastructure\n4. Launch targeted campaigns for user retention",
          collapsed: false
        }
      ]
    };
  };

  const toggleSection = (messageId, sectionIndex) => {
    const updatedMessages = activeChat.messages.map(msg => {
      if (msg.id === messageId && msg.type === 'ai') {
        const updatedSections = msg.content.sections.map((section, idx) => 
          idx === sectionIndex ? { ...section, collapsed: !section.collapsed } : section
        );
        return { ...msg, content: { ...msg.content, sections: updatedSections } };
      }
      return msg;
    });

    const updatedChat = { ...activeChat, messages: updatedMessages };
    setActiveChat(updatedChat);
    setChats(chats.map(c => c.id === updatedChat.id ? updatedChat : c));
  };

  const addDocuments = (newDocs) => {
    setDocuments([...documents, ...newDocs]);
  };

  const removeDocument = (docId) => {
    setDocuments(documents.filter(d => d.id !== docId));
  };

  const value = {
    sidebarCollapsed,
    setSidebarCollapsed,
    chats,
    activeChat,
    setActiveChat,
    isLoading,
    documents,
    createNewChat,
    deleteChat,
    togglePin,
    sendMessage,
    toggleSection,
    addDocuments,
    removeDocument
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
