import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';
import articleRouter from './routes/articleRouter.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/articles', articleRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
