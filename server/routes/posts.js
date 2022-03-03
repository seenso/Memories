import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// setup prefix '/posts' to the below routes in ./server/index.js

router.get('/', getPosts)
router.post('/', createPost)

export default router;