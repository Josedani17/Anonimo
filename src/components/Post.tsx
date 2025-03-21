import React from 'react';

interface PostProps {
  id: number;
  title: string;
  content: string;
  saved: boolean;
  onSave: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ id, title, content, saved, onSave }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <button
        onClick={() => onSave(id)}
        className="text-sm text-blue-500 hover:underline"
      >
        {saved ? 'Desmarcar como favorito' : 'Marcar como favorito'}
      </button>
    </div>
  );
};

export default Post; // Asegúrate de exportarlo correctamente como "default"
