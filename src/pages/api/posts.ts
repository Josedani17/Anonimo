import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongodb.js";
import Post from "../../models/Post.js";

// Obtener posts y publicar nuevos
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === "GET") {
    // Obtener todos los posts
    const posts = await Post.find({});
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    // Crear un nuevo post
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Título y contenido son obligatorios" });
    }

    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost); // Retorna el post creado
  } else {
    res.status(405).end(); // Método no permitido
  }
}
