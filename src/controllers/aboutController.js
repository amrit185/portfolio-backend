const About = require('../models/About');

const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about || {}); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching about data' });
  }
};

const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (about) {
      about = await About.findByIdAndUpdate(about._id, req.body, { new: true });
    } else {
      about = await About.create(req.body);
    }
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: 'Error updating about data' });
  }
};

module.exports = { getAbout, updateAbout };
