import express from 'express';
import { signupUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', signupUser);

export default router;
