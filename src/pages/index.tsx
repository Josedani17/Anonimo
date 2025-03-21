import { useState } from 'react';
import Post from '../components/Post';

const initialPosts = [
  { id: 1, title: 'Engañé a mi pareja en un viaje', content: 'Fue en un viaje de negocios...', saved: false },
  { id: 2, title: 'Mi doble vida lleva 3 años', content: 'Tengo dos relaciones al mismo tiempo...', saved: false },
];

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSave = (id: number) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, saved: !post.saved } : post
    ));
  };

  const handlePost = () => {
    if (newPost.title && newPost.content) {
      const newPostData = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        saved: false,
      };
      setPosts([newPostData, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Foro Anónimo</h1>
      
      {/* Formulario para publicar nuevos posts */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-100">
        <input
          type="text"
          placeholder="Título"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Cuenta tu historia..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handlePost}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Publicar
        </button>
      </div>

      {/* Lista de posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} onSave={handleSave} />
        ))}
      </div>
    </div>
  );
}
