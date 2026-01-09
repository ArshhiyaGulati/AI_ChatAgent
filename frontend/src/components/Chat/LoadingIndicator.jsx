import React from 'react';

const LoadingIndicator = () => {
return (
    <div className="flex justify-start">
      <div className="max-w-3xl rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse delay-150" />
          <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse delay-300" />
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
