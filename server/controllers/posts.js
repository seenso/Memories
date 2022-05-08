// route handlers
import PostMessage from '../models/postMessage.js'; // gives us access to the Model/Schema
// import router from '../routes/posts.js';
import express from 'express';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const createPost = async (req, res) => {
  const body = req.body; // comes in from front end
  const newPost = new PostMessage(body)

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message)
    res.status(409).json({ message: error.message })
  }
};

export default router;