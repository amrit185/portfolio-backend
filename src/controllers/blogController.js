const Blog = require('../models/Blog'); // Model created on Day 3

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog' });
  }
};

const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog removed' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog' });
  }
};

module.exports = { getBlogs, createBlog, deleteBlog };