
const Project = require('../models/Project');


const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching projects' });
  }
};


const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.error("PROJECT CREATE ERROR:", error.message, error); 
    res.status(400).json({ message: 'Invalid project data', error: error.message });
  }
};


const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error updating project' });
  }
};


const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project' });
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
