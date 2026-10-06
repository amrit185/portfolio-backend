const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { type: String },
  published: { type: Boolean, default: false } // Allows you to save drafts
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);