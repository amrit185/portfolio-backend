const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Frontend", "Backend", "Tools"
  icon: { type: String } // URL or class name for the icon
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);