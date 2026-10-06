const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String }], // Array of strings e.g., ["React", "Node.js"]
  liveUrl: { type: String },
  repoUrl: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);