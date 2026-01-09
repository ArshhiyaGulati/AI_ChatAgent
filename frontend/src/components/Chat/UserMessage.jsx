import React from 'react';

const UserMessage = ({ message }) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl px-4 py-3 max-w-2xl shadow-md">
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
};

export default UserMessage;