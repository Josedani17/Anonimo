// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  saved: { type: Boolean, default: false },
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
