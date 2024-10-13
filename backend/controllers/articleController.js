import Article from '../models/articleSchema.js';
import User from '../models/userSchema.js';

export const addArticle = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const article = new Article({
    title: req.body.title,
    body: req.body.body,
    author: user._id
  });

  await article.save();

  user.blogs.push(article._id);
  await user.save();

  res.status(201).json({ message: 'Article created successfully', article });
};
