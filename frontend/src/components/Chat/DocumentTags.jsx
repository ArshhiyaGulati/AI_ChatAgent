import React from 'react';
import { File, Trash2 } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';

const DocumentTags = () => {
  const { documents, removeDocument } = useChatContext();

 return (
    <div className="mt-3 flex flex-wrap gap-2">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs"
        >
          <File size={14} className="text-indigo-600" />

         <span className="max-w-xs truncate text-zinc-800">

            {doc.name}
          </span>

          <span className="text-zinc-400">
            {doc.size}
          </span>

          <button
            onClick={() => removeDocument(doc.id)}
            className="ml-1 flex h-4 w-4 items-center justify-center rounded hover:bg-zinc-200 transition"
            title="Remove document"
          >
            <X size={12} className="text-zinc-500 hover:text-zinc-700" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default DocumentTags;