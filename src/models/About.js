const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name: { type: String },
  title: { type: String },
  bio: { type: String },
  avatar: { type: String },
  resumeUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('About', aboutSchema);