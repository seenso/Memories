// route handlers
import PostMessage from '../models/postMessage.js'; // gives us access to the Model/Schema

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const createPost = async (req, res) => {
  const body = req.body; // comes in from front end
  const newPost = new PostMessage(post)

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
};