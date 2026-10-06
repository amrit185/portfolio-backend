const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Allow frontend to communicate with API
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Portfolio CMS API is running...');
});

// We will mount routes here on Days 2-4
app.use('/auth', require('./src/routes/authRoutes'));
// Add these below app.use('/auth', ...)
app.use('/api/projects', require('./src/routes/projectRoutes'));
app.use('/api/skills', require('./src/routes/skillRoutes'));
app.use('/api/upload', require('./src/routes/uploadRoutes'));
app.use('/api/about', require('./src/routes/aboutRoutes'));
app.use('/api/blogs', require('./src/routes/blogRoutes'));
app.use('/api/contact', require('./src/routes/contactRoutes'));
// app.use('/api/blogs', require('./src/routes/blogRoutes'));
// app.use('/api/skills', require('./src/routes/skillRoutes'));

// app.use('/api/projects', require('./src/routes/projectRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});