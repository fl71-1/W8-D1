import express from 'express';
import { addArticle } from '../controllers/articleController.js';
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/addArticle', authenticateToken, addArticle);

export default router;
