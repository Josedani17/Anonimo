import React, { useState } from 'react';
import Post from '@/components/Post';
import { TextField, Button } from '@mui/material'; // Usamos TextField aquí en lugar de Textarea

interface PostData {
  id: number;
  title: string;
  content: string;
  saved: boolean;
}

const Home = () => {
  const [posts, setPosts] = useState<PostData[]>([
    { id: 1, title: 'Primer Post', content: 'Contenido del primer post', saved: false },
    { id: 2, title: 'Segundo Post', content: 'Contenido del segundo post', saved: false },
  ]);

  const handleSave = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Bienvenido a Anónimo</h1>

      {/* Formulario para crear un post */}
      <div className="mb-6">
        <h2 className="text-2xl mb-2">Crear un nuevo post</h2>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contenido"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" className="mt-4">
          Publicar
        </Button>
      </div>

      {/* Mostrar los posts existentes */}
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            saved={post.saved}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
