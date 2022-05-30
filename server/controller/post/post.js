const Post = require('../../model/post');

const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;

  const newPost = new Post({ title, content });

  try {
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
};
