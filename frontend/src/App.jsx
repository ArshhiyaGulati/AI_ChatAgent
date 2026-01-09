import React from 'react';
import { ChatProvider } from './context/ChatContext';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <ChatProvider>
      <Layout />
    </ChatProvider>
  );
};

export default App;